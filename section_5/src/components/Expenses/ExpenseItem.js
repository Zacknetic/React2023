import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
function ExpenseItem(props) {
  const { title, amount, date } = props.item;
  // let updatedTitle = title;
  //   function clickHandler() {
  //     updatedTitle = "Updated!";
  //     console.log(updatedTitle);
  //   }//this will not work as react will not re-render the component as it is not aware of the change in the variable
  //   here is how to actually do it
  const [updatedTitle, setUpdatedTitle] = useState(title);
  function clickHandler() {
    setUpdatedTitle("Updated!");
    console.log(updatedTitle);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{updatedTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
