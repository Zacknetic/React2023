import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
    const { filteredExpenses } = props;
    let expensesContent = <h2 className="expense-list__fallback">Found no expenses.</h2>;

    if(filteredExpenses.length > 0){
      expensesContent = filteredExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} item={expense}></ExpenseItem>;
      })
    }

    return <ul key={"ExpensesList"} className="expenses-list">{expensesContent}</ul>;
}