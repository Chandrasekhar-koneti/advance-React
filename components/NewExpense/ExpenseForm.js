
import React from "react"

import './ExpenseForm.css'

const ExpenseForm=()=>{

    const handler=(event)=>{
        console.log(event.target.value)
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={handler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" onChange={handler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" onChange={handler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">ADD EXPENSES</button>
        </div>
    </form>

}
export default ExpenseForm