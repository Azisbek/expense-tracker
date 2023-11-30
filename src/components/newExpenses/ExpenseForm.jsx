import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

      

    const inputChangeHandler = (event) => {
        const currentInput = event.target.name
      if (currentInput === 'title') {
        setTitle(event.target.value)
      } else if (currentInput === 'amount') {
        setAmount(event.target.value)
      } else if (currentInput === 'date') {
        setDate(event.target.value)
      }
    }

    
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseItem = {
            title: title,
            amount: Number(amount),
            date : new Date(date)
        }

        props.onSave(expenseItem)
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input value={title} name='title' onChange={inputChangeHandler} type="text" />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input value={amount} name='amount' onChange={inputChangeHandler}  type="number" />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input value={date} name='date' onChange={inputChangeHandler}  type="date" min={'2022-01-01'} max={'2027-01-01'}/>
                </div>
                <button className='new-expense__actions'>Add Expense</button>
            </div>
            
        </form>
    )
}


export default ExpenseForm