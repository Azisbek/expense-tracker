import './App.css';
import Expenseitem from './components/Expenseitem';

function App() {

  const EXPENSE_DATE = [
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
  return (
    <div className="App">
     <Expenseitem 
     title={EXPENSE_DATE[0].title}
     price={EXPENSE_DATE[0].amount}
     date={EXPENSE_DATE[0].date}/>
     <Expenseitem 
     title={EXPENSE_DATE[1].title}
     price={EXPENSE_DATE[1].amount}
     date={EXPENSE_DATE[1].date}/>
     <Expenseitem 
     title={EXPENSE_DATE[2].title}
     price={EXPENSE_DATE[2].amount}
     date={EXPENSE_DATE[2].date}/>
     <Expenseitem 
     title={EXPENSE_DATE[3].title}
     price={EXPENSE_DATE[3].amount}
     date={EXPENSE_DATE[3].date}/>
    </div>
  );
}

export default App;
