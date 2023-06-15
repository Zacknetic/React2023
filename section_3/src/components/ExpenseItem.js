import './ExpenseItem.css'
function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>June 14th</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$200.55</div>
            </div>

        </div>)
        ;
}

export default ExpenseItem;