import ExpenseDate from './ExpenseDate'
import './expense.css'
import './ExpenseDate.css'
import { useState } from 'react'
function ExpenseItem(props){

    const[amount,setamount]=useState(props.amount);

    const clickhandler=()=>{
        setamount('RS.100')
        console.log('amount changed')
    }

    return ( 
    <div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>

        <div className='expense-item__description'><h2>{props.title}</h2> </div>

        <div className='expense-item__price'>{ amount}</div>
        <button onClick={clickhandler}> change_amount</button>

    
    </div>)

}

export default ExpenseItem