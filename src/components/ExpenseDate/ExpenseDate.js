import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();

    return (<div className='expense-date'>
        <section className='expense-date__month'>{month}</section>
        <section className='expense-date__year'>{year}</section>
        <section className='expense-date__day'>{day}</section>
    </div>)
}

export default ExpenseDate