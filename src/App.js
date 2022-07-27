import { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
    const expenses = [
        {
            name: 'Spider-man NWH movie',
            cost: 350,
            date: new Date('2021-12-17')
        },
        {
            name: 'Bought ED tools',
            cost: 400,
            date: new Date('2022-4-9')
        }
    ]
    const [changedExpenses, setExpenses] = useState(expenses)
    const addExpenseHandler = expense => {
        setExpenses(changedExpenses => [...changedExpenses, expense])
    }

    return (<div className='App'>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={changedExpenses} />
    </div>)
}

export default App