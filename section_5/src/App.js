import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Dodger's Food",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { id: "2", title: "Pressure Washer", amount: 150.49, date: new Date(2023, 2, 12) },
  {
    id: "3",
    title: "Cellphone Bill",
    amount: 150.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "4",
    title: "Nintendo Switch Game",
    amount: 55,
    date: new Date(2023, 5, 12),
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
