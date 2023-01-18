import React, { useState } from 'react';

import ExpenseChart from './ExpenseChart';
// import ExpenseItem from './ExpenseItem';
import Card from '../Card/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expense.css';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  })

  // let expensecontent=<p>NO ITEMS FOUND</p>
  // if(filteredExpense.length>0)
  // {
  //   expensecontent=filteredExpense.map((expense)=>(
  //     <ExpenseItem key={expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}/>
  //   ))}

  

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpense}/>
        {/* {expensecontent} */}
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;