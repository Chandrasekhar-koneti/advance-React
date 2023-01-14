
import React, {useState} from "react"

import './ExpenseForm.css'

const ExpenseForm=()=>{
    
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredamount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')

    const titlehandler=(event)=>{
        setEnteredTitle(event.target.value)
    
    }

    const amounthandler=(event)=>{
        setEnteredAmount(event.target.value)
    }

    const datehandler=(event)=>{
        setEnteredDate(event.target.value)
    }

    const submithandler=(event)=>{
        event.preventDefault()

        const expensedata={
            title:enteredTitle,
            amount:enteredamount,
            date:new Date(enteredDate)
        }

        console.log(expensedata)
    }

    return <form onSubmit={submithandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titlehandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min='0' onChange={amounthandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min='2020-01-01' max='2023-12-31' onChange={datehandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">ADD EXPENSES</button>
        </div>
    </form>

}
export default ExpenseForm