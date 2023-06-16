import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const expenseItems = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 94.67, date: new Date(2021, 2, 28) },
    { title: 'New TV', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'New Desk (Wooden)', amount: 294.67, date: new Date(2021, 2, 28) },
];

const expenseList = expenseItems.map((expense) => (

    <ExpenseItem item={expense}></ExpenseItem>

));


export default function Expenses() {
    return (
        <Card className="expenses">
            {expenseList}
        </Card>
    )

}


    //loops through the array of expenses and creates a new array of JSX elements

