import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isediting, setisediting]=useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setisediting(false)
  };

  const startEditinghandler=()=>{
    setisediting(true)
  }

  const stopeditingHandler=()=>{
    setisediting(false)
  }

  return (
    <div className='new-expense'>
      {!isediting && <button onClick={startEditinghandler}>ADD NEW EXPENSE</button>}
      {isediting && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopeditingHandler} />}
    </div>
  );
};

export default NewExpense;