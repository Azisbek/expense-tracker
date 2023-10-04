import React, {useState} from 'react'
import Expensedate from '../components/Expensedate'
import './Expenseitem.css'

function Expenseitem(props) {
    const [title, setTitle] = useState(props.title)
    const expensePrice = props.price

const updateTitleHandler = () => {
    setTitle('updated')
}

    return (
        <div className='expense-item'>
            <Expensedate date={props.date}/>
            <h2 className='expense-item__description'>{title}</h2>
            <div className='expense-item__price'>{expensePrice}$</div>
            <button onClick={updateTitleHandler}>Update</button>
        </div>
    )
}

export default Expenseitem