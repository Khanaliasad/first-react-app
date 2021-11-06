// import React, { useState } from "react";

import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function Expense(props) {
  // const [Title, setTitle] = useState(props.title);
  // const Click_Handeler = () => {
  //   console.log(Title);
  //   setTitle(" Updated !!!");
  // };

  // setTitle("Updated BITCH!!!")}
  const Title = props.title;
  return (
    <Card>
      <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{Title}</h2>
          <div className="expense-item__price">Rs:{props.amount}</div>
        </div>
      </div>
      {/* <Card>
            <button className="expense-item__price" onClick={Click_Handeler}>
              Change Item
            </button>
          </Card> */}
    </Card>
  );
}
export default Expense;
