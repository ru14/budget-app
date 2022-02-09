import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';







const NewExpense = (props) => {
    const [isOpened, setIsOpend] = useState(false)
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData)
        props.onAddExpense(expenseData);
    };
    const toggle = () =>{
        setIsOpend(false)
    }
    

    return (
    <div className="new-expense">
        {!isOpened &&<button onClick={()=>setIsOpend(true)}>Add New Expense</button>}
        {isOpened && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel ={toggle} ></ExpenseForm>}
    </div>
    );
}
export default NewExpense