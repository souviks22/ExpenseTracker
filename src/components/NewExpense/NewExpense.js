import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from "../ExpenseForm/ExpenseForm"

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const NewExpenseHandler = expense => {
        props.onAddExpense(expense)
    }
    const clickHandler = () => {
        setShowForm(true)
    }
    const responseHandler = () => {
        setShowForm(false)
    }

    return (<div className="new-expense">
        {(showForm)
            ? <ExpenseForm onNewExpense={NewExpenseHandler} onResponse={responseHandler} />
            : <button onClick={clickHandler}>Add New Expense</button>
        }
    </div>)
}

export default NewExpense