import './ExpenseChart.css'
import ExpenseBar from '../ExpenseBar/ExpenseBar'

const ExpenseChart = (props) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dataPoints = months.map(month => {
        return { label: month, value: 0 }
    })
    for (const expense of props.data)
        dataPoints[expense.date.getMonth()].value += expense.cost;

    const maxValue = Math.max(...dataPoints.map(dataPoint => dataPoint.value));

    return (<div className='chart'>
        {dataPoints.map(dataPoint =>
            <ExpenseBar key={dataPoint.label} label={dataPoint.label} fill={dataPoint.value / maxValue} />
        )}
    </div>)
}

export default ExpenseChart