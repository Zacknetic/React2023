import ExpenseItem from "./components/ExpenseItem";
function App() {

  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 94.67, date: new Date(2021, 2, 28) },
    { title: 'New TV', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'New Desk (Wooden)', amount: 294.67, date: new Date(2021, 2, 28) },
  ];


  //loops through the array of expenses and creates a new array of JSX elements
  const expenseList = expenses.map((expense) => (
    <ExpenseItem item={expense}></ExpenseItem>
  ));
  
  return (
    expenseList
    // <div>
    //   <ExpenseItem item={expenses[0]}></ExpenseItem>
    //   <ExpenseItem item={expenses[1]}></ExpenseItem>
    //   <ExpenseItem item={expenses[2]}></ExpenseItem>
    // </div>
  );
}

export default App;
