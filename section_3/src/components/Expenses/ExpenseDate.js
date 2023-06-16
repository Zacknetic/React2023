import './ExpenseDate.css'
export default function ExpenseDate(props) {

    const date = new Date(props.date);
    const { month, year, day } = { month: date.toLocaleString('en-US', { month: 'long' }), year: date.getFullYear(), day: date.toLocaleString('en-US', { day: '2-digit' }) };

    return (
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>
    )
}