import ExpenseDate from './ExpenseDate'
import './expense.css'
import './ExpenseDate.css'
function ExpenseItem(props){
    const clickandler=()=>{
        console.log('clicked')
    }

    return ( 
    <div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>

        <div className='expense-item__description'><h2>{props.title}</h2> </div>

        <div className='expense-item__price'>{props.amount}</div>
        <button onClick={clickandler}> changetitle</button>

    
    </div>)

}

export default ExpenseItem