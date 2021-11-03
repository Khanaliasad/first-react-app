import React from "react";
import "./NewExpense.css";
// import Card from '../Card'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {
//to execute a function in a parent component we made a custom prop.function named (onSaveExpenseData )
//passed the following function init to be used in child class 
  const  saveExpenseDataHandeler =(enteredExpenseData) => {
    const expenseData = {...enteredExpenseData}
    props.formExpenceData(expenseData);
  };

  return (
    <div className="new-expense">
      
          <ExpenseForm onSaveExpenseData = {saveExpenseDataHandeler} />
      
    </div>
  );
};

export default NewExpense;
