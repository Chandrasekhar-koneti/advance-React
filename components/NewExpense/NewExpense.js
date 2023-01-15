import React from "react"

import './NewExpense.css'

import ExpenseForm from "./ExpenseForm"

const NewExpense=(props)=>{
    const saveexpensedatahandler=(enteredexpensedata)=>{
        const expenseData={
            ...enteredexpensedata,
            id: Math.random().toString()
        }
        props.onAddexpense(expenseData)
    }


    return <div className="new-expense">
        <ExpenseForm onsaveexpensedata={saveexpensedatahandler}/>

    </div>

}

export default NewExpense