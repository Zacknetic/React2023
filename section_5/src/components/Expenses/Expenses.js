import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

import "./Expenses.css";

const expenseItems = [
  { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { title: "Toilet Paper", amount: 94.67, date: new Date(2021, 2, 28) },
  { title: "New TV", amount: 294.67, date: new Date(2021, 2, 28) },
  { title: "New Desk (Wooden)", amount: 294.67, date: new Date(2021, 2, 28) },
];

const expenseList = expenseItems.map((expense) => (
  <ExpenseItem item={expense}></ExpenseItem>
));

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  //   const [filterInfoText, setFilterInfoText] = useState("2020, 2021, 2022, 2023");

  let filterInfoText = "2020, 2021, 2022, 2023";

  if (filteredYear === "2020") {
    filterInfoText = "2021, 2022, 2023";
  } else if (filteredYear === "2021") {
    filterInfoText = "2020, 2022, 2023";
  } else if (filteredYear === "2022") {
    filterInfoText = "2020, 2021, 2023";
  } else if (filteredYear === "2023") {
    filterInfoText = "2020, 2021, 2022";
  }

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilteredYear={filterChangeHandler}
      />
      <p>Data for these years are hidden for {filterInfoText}</p>
      {expenseList}
    </Card>
  );
}
