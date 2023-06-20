import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const { onSaveExpenseData } = props;
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function inputChangeHandler(identifier, value) {
  // Adjust date to UTC if identifier is "enteredDate"
  if (identifier === "enteredDate") {
    
    const localDate = new Date(value);
    const year = localDate.getUTCFullYear();
    const month = localDate.getUTCMonth() + 1;  // getUTCMonth() is zero-based
    const day = localDate.getUTCDate();

    // Pad month and day with leading zeros if necessary
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    const dayStr = day < 10 ? `0${day}` : `${day}`;

    value = `${year}-${monthStr}-${dayStr}`;
  }

  setUserInput((prevState) => {
    return { ...prevState, [identifier]: value };
  });
}
  //   function titleChangeHandler(event) {
  //     // setUserInput({ enteredTitle: event.target.value, ...userInput });
  //     // this will not work as react schedules state updates and does not execute them immediately
  //     //instead below is the correct way to do it
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value };
  //     });
  //   }

  //   function amountChangeHandler(event) {
  //     // setUserInput({ enteredAmount: event.target.value, ...userInput });
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value };
  //     });
  //   }

  //   function dateChangeHandler(event) {
  //     // setUserInput({ enteredDate: event.target.value, ...userInput });
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value };
  //     });
  //   }

  function submitHandler(event) {
    event.preventDefault(); //this prevents the default behaviour of the form which is to send a request and reload the page
    console.log(userInput.enteredDate)
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: userInput.enteredDate,
    };
    // props.onSaveExpenseData(expenseData);
    onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={(event) =>
              inputChangeHandler("enteredTitle", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={(event) =>
              inputChangeHandler("enteredAmount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={userInput.enteredDate}
            onChange={(event) =>
              inputChangeHandler("enteredDate", event.target.value)
            }
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
