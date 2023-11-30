import ExpenseForm from "./ExpenseForm"
import './NewExpenses.css'


const NewExpenses = (props) => {

    const saveExpenseHandler = (expense) => {
        const dataWithId = {
            ...expense,
            id: Math.random().toString()
        }
        props.onAdd(dataWithId)

    }

    return (
        <div className="new-expense">
            <ExpenseForm onSave={saveExpenseHandler}/>
        </div>
    )
}

export default NewExpenses


