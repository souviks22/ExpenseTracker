import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const years = [...new Set(props.fullExpenses.map(expense => expense.date.getFullYear()))]
    const changeHandler = e => {
        props.onFilterYear(e.target.value)
    }

    return (<div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Filter by Year</label>
            <select onChange={changeHandler}>
                <option value="all" key="all">All</option>
                {years.map(year =>
                    <option value={year} key={year}>{year}</option>
                )}
            </select>
        </div>
    </div>)
}

export default ExpenseFilter