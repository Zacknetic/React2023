import Expenses from "./components/Expenses/Expenses";
import NewExpense from "components/NewExpense/NewExpense";
// import React from 'react';
function App() {
  // return React.createElement('div', {}. React.createElement('h2', {}, 'Let\'s get started!'), React.createElement(Expenses, {}, null));

  return (
    <div>
      <NewExpense />

      <Expenses />
    </div>
  );
}

export default App;
