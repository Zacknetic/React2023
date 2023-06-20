import './ExpenseDate.css'
export default function ExpenseDate(props) {
    const [year, monthIndex, day] = props.date.split('-');
    const month = new Date(year, monthIndex - 1).toLocaleString('en-US', { month: 'long' });

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}
