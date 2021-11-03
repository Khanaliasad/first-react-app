import React from "react";
import "./ExpenseForm.css";
import "../Expense.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandeler = (event) => {
    setenteredTitle(event.target.value);
    // console.log(event.target.value);
  };
  const amountChangeHandeler = (event) => {
    setenteredAmount(event.target.value);
    // console.log(event.target.value);
  };
  const dateChangeHandeler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(event.target.value);
  };
  function getRandomInt(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const SubmitHandeler = (event) => {
    // methord to prevent page from reloding while clicking the submit button
    event.preventDefault();
    //parsing for data into an object
    const expenceData = {
      id: getRandomInt(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //prop(onSaveExpenseData) Made on parent component and executing a function init
    // <ExpenseForm onSaveExpenseData = {saveExpenseDataHandeler} />
    // const saveExpenseDataHandeler = (enteredExpenseData) => {
    //   const expenseData = { ...enteredExpenseData };
    //   console.log(expenseData);
    // };

    props.onSaveExpenseData(expenceData);
    // console.log(expenceData);


    //after saving the input values in expenseData after the submit event
    //we need to set values of input into empty string
    //so we again initialize [setenteredTitle][setenteredAmount][setenteredDate] from useState("");
    // into an empty string  HOW??
    // by setting [value={enteredTitle} *and vice versa*] in every input &
    setenteredTitle("");
    setenteredAmount("");
    setEnteredDate("");
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
              value={enteredTitle}
              onChange={titleChangeHandeler}
              placeholder="enter the fukn titte"
            ></input>
          </div>

          <div className="new-expense__controls ">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandeler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
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
