import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

import "./Expenses.css";

export default function Expenses(props) {
  const { expenseItems } = props;

  const [filteredYear, setFilteredYear] = useState("2023");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  const filteredExpenses = expenseItems.filter((expense) => {
    const date = new Date(expense.date);
    return date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilteredYear={filterChangeHandler}
      />
      
      {filteredExpenses.length === 0 ? <p>No Expenses found.</p> : 
      filteredExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} item={expense}></ExpenseItem>;
      })}
    </Card>
  );
}
