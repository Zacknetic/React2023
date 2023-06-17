import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function NewExpense() {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // here we are passing the data from the child component to the parent component
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
