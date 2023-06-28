import { useState } from "react";

export default function Form(props) {
  const initialExpenseData = {
    currentSavings: "",
    yearlyContribution: "",
    expectedReturn: "",
    duration: "",
  };

  const [expenseData, setExpenseData] = useState(initialExpenseData);

  function inputChangeHandler(input, value) {
    setExpenseData((prevState) => {
      return { ...prevState, [input]: +value };
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const yearlyData = calculateHandler(expenseData);

    props.onSaveSavingsData(yearlyData);
  };

  function resetHandler(event) {
    event.preventDefault();
    setExpenseData(initialExpenseData);
    props.onResetTable(true);
  }

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: yearlyInterest * (i + 1),
      });
    }
    // do something with yearlyData ...
    return yearlyData;
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="current-savings"
            onChange={(event) =>
              inputChangeHandler("currentSavings", event.target.value)
            }
            value={expenseData.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearlyContribution", event.target.value)
            }
            value={expenseData.yearlyContribution}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            min="0.1"
            max="100.0"
            step="0.1"
            id="expected-return"
            onChange={(event) =>
              inputChangeHandler("expectedReturn", event.target.value)
            }
            value={expenseData.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            min="1"
            step="1"
            id="duration"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={expenseData.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="button" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="button" onClick={submitHandler} className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
