import React from "react";
import "./ExpenseForm.css";
import "../Expense.css";
import { useState } from "react";
const ExpenseForm = () => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandeler = (event) => {
    setenteredTitle(event.target.value);
    console.log(event.target.value);
  };
  const amountChangeHandeler = (event) => {
    setenteredAmount(event.target.value);
    console.log(event.target.value);
  };
  const dateChangeHandeler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };
  const SubmitHandeler = (event) => {
    event.preventDefault();
    const expenceData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenceData)
  };

  return (
    <div>
      <form onSubmit={SubmitHandeler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label htmlFor="title">TITLE</label>
            <input
              id="title"
              type="text"
              onChange={titleChangeHandeler}
              placeholder="enter the fukn titte"
            ></input>
          </div>

          <div className="new-expense__controls ">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandeler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              min="2000-01-01"
              max="2022-12-31"
              onChange={dateChangeHandeler}
            />
          </div>
        </div>
        <div className="new-expense__actions ">
          <button type="submit ">ADD EXPENSE</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
