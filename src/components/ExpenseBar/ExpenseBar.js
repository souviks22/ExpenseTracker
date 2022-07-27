import './ExpenseBar.css'

const ExpenseBar = (props) => {
    const heightFill = props.fill * 100;

    return (<div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{ height: `${heightFill}%` }}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>)
}

export default ExpenseBar