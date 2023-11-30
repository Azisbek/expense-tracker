import './ExpensesChart.css'
import Chart from '../chart/Chart'

const ExpensesChart = (props) => {
    const chartWithDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'jun', value: 0},
        {label: 'jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    for (const expense of props.expenses) {
        const currentMonth = expense.date.getMonth()
        chartWithDataPoints[currentMonth].value += expense.amount
    }

    return <Chart dataPoints={chartWithDataPoints}/>
}

export default ExpensesChart