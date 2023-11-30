import Expenseitem from './Expenseitem'
import './Expenses.css'
import Card from '../ui/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const expenses = props.expenses

    const [selectedYear, setSelectedYear] = useState('All')

    const selectYearHandler = (date) => {
        setSelectedYear(date)
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    let expenseContent = <p style={{color: 'red'}}>No expenses found</p>

    if (selectedYear === 'All') {
        expenseContent = expenses.map((el, imdex, array) => (
            <Expenseitem 
            key={el.id}
            title={el.title} 
            price={el.amount} 
            date={el.date}/>
        ))
    }

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((el, imdex, array) => (
            <Expenseitem 
            key={el.id}
            title={el.title} 
            price={el.amount} 
            date={el.date}/>
        ))
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={selectedYear} onSelect={selectYearHandler}/>
            <ExpensesChart expenses={expenses}/>
            {expenseContent}
           
        </Card>
    )
}

export default Expenses