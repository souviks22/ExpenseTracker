import ExpenseDate from "../ExpenseDate/ExpenseDate"
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    return (<div className="expense-item">
        <section className="expense-item__description">
            <ExpenseDate date={props.date} />
            <h2>{props.name}</h2>
        </section>
        <section className="expense-item__cost">Rs. {props.cost}/-</section>
    </div>)
}

export default ExpenseItem