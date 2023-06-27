import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "21",
    title: "Convenience Fee Service Fee",
    amount: 12.99,
    date: new Date(2023, 1, 15),
  },
  {
    id: "25",
    title: "Overdraft Fee",
    amount: 35.00,
    date: new Date(2023, 4, 20),
  },
  {
    id: "30",
    title: "Rent (Online Convenience Fee)",
    amount: 5.00,
    date: new Date(2023, 5, 1),
  },
  {
    id: "31",
    title: "Overdraft Fee",
    amount: 35.00,
    date: new Date(2023, 5, 2),
  },
  {
    id: "32",
    title: "Overdraft Fee",
    amount: 35.00,
    date: new Date(2023, 5, 2),
  },
  {
    id: "33",
    title: "Overdraft Fee",
    amount: 35.00,
    date: new Date(2023, 5, 3),
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
