import React from "react";
import "./NewExpense.css";
// import Card from '../Card'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {
  
  return (
    <div className="new-expense">
      
          <ExpenseForm/>
      
    </div>
  );
};

export default NewExpense;
