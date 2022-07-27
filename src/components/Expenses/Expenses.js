import { useState } from 'react'
import './Expenses.css'
import Card from '../Card/Card'
import ExpenseItem from "../ExpenseItem/ExpenseItem"
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseChart from '../ExpenseChart/ExpenseChart'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState()
    const filterYearHandler = year => {
        setFilteredYear(year)
    }
    const filteredExpenses = props.items.filter(expense =>
        expense.date.getFullYear() === parseInt(filteredYear) || isNaN(parseInt(filteredYear))
    )

    return (<Card className="expenses">
        <ExpenseFilter fullExpenses={props.items} onFilterYear={filterYearHandler} />
        <ExpenseChart data={filteredExpenses} />
        {filteredExpenses.map(expense =>
            <ExpenseItem key={expense.name} name={expense.name} cost={expense.cost} date={expense.date} />
        )}
    </Card>)
}

export default Expenses