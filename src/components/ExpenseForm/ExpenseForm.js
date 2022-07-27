import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [changedName, setName] = useState();
    const [changedCost, setCost] = useState();
    const [changedDate, setDate] = useState();

    const changeNameHandler = e => { setName(e.target.value) }
    const changeCostHandler = e => { setCost(e.target.value) }
    const changeDateHandler = e => { setDate(e.target.value) }
    const submitHandler = e => {
        e.preventDefault();
        if (changedName && changedCost && changedDate) {
            const newExpense = {
                name: changedName,
                cost: parseFloat(changedCost),
                date: new Date(changedDate)
            }
            props.onNewExpense(newExpense)
            setName('');
            setCost('');
            setDate('');
            props.onResponse()
        }
    }

    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Name</label>
                <input type="text" onChange={changeNameHandler} value={changedName} />
            </div>
            <div className='new-expense__control'>
                <label>Cost</label>
                <input type="number" min='0.01' step='0.01' onChange={changeCostHandler} value={changedCost} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min='2020-1-1' onChange={changeDateHandler} value={changedDate} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onResponse}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm