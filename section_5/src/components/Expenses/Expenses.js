import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const { expenseItems } = props;

  const [filteredYear, setFilteredYear] = useState("2023");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
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
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  );
}
