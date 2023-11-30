import { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/newExpenses/NewExpenses';

const EXPENSE_DATA = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 200,
    date: new Date(2022, 5, 15)
  },
  {
    id: 'e2',
    title: 'Kinder Garden',
    amount: 250,
    date: new Date(2023, 4, 25)
  },
  {
    id: 'e3',
    title: 'Toilet Paper',
    amount: 2,
    date: new Date(2021, 3, 12)
  },
  {
    id: 'e4',
    title: 'Utlities',
    amount: 100,
    date: new Date(2022, 5, 15)
  },

  
]

function App() {

  const [expenses, setExpenses] = useState(EXPENSE_DATA)

  const addExpenseHandler = (newExpense) => {
      setExpenses((prevExpenses) => {
        return [newExpense, ...prevExpenses]
      })   
  
  }

  return (
    <div className="App">
      <NewExpenses onAdd={addExpenseHandler}/>
     <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
