import React from 'react';
import ExpenseItem from './components/ExpenseItem.js'
import NewExpense from './components/NewExpense/NewExpense.js';

function App() {
  const expenses=[
    {
    date:new Date(2023,0,23),
    title:"Car Insurance",
    amount:'RS.1250'},

    {
      date:new Date(2023,1,8),
      title:'Food',
      amount:'RS.2000'
    },

    {
      date:new Date(2022,11,28),
      title:'Trip',
      amount:'RS.82000'
    },
    {
      date:new Date(2022,11,31),
      title:'Fuel',
      amount:'RS.8000'
    }

  ]
//  expenses.map((expenses)=>(console.log(expenses)))


  return (

    <div>
     <NewExpense/>
  
     {expenses.map((expense,index)=>
     
     <ExpenseItem key={index}
     date={expenses[index].date}
     title={expenses[index].title }
     amount={expenses[index].amount}>
     </ExpenseItem>)}

 
    </div>

  );
}

export default App;





