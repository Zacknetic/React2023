import Expenses from "./components/Expenses/Expenses";
import NewExpense from "components/NewExpense/NewExpense";
import { useState } from "react";
// import React from 'react';

const DUMMY_EXPENSES = [
  { title: "Car Insurance", amount: 294.67, date: "2021-03-28" },
  { title: "Toilet Paper", amount: 94.67, date: "2021-03-28" },
  { title: "New TV", amount: 294.67, date: "2021-03-28" },
  { title: "New Desk (Wooden)", amount: 294.67, date: "2021-03-28" },
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // return React.createElement('div', {}. React.createElement('h2', {}, 'Let\'s get started!'), React.createElement(Expenses, {}, null));
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseItems={expenses} />
    </div>
  );
}

export default App;
