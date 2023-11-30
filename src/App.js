import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/newExpenses/NewExpenses";

const EXPENSE_DATA = [];

function App() {
  const [expenses, setExpenses] = useState(EXPENSE_DATA);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpenses onAdd={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
