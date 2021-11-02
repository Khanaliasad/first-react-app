import React, { useState } from "react";

import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function Expense(props) {
  // Title = props.title
  
  const [Title, setTitle] = useState(props.title);
  const Click_Handeler = () => {
    
    console.log(Title)
    setTitle(" Updated !!!");

  }
    
  // setTitle("Updated BITCH!!!")}

  return (
    <Card>
      <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{Title}</h2>
          <Card>
            <button className="expense-item__price" onClick={Click_Handeler}>
              Change Item
            </button>
          </Card>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </Card>
  );
}
export default Expense;
