import "./Expense.css";
import Card from "./Card";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./Filter/ExpenseFilter";
import React, { useState } from "react";
import "./Filter/ExpenseFilter.css";

function Expense(props) {
  const [FilteredYear, setFilteredYear] = useState(2020);
  let expenses = props.item;
  const ExpenseFilterHandeler = (event) => {
    // console.log('filter event detected' + event)
    setFilteredYear(event);
  };

  const filteredYear = props.item.filter((params) => {
    return params.date.getFullYear().toString() === FilteredYear;
  });

  return (
    <Card>
      <ExpenseFilter
        arrforoptions={expenses}
        select={FilteredYear}
        onChangeFilter={ExpenseFilterHandeler}
      />

      {filteredYear.length === 0 && (
        <h2 className="expenses-filter__none expense-item expense-item__description ">
          No Expenses Found.
        </h2>
      )}
      {filteredYear.length > 0 &&
        filteredYear.map((expense) => (
          <ExpenseList
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}
export default Expense;

// #javascript ternary expression
// {filteredYear.length===0?<p>no examples found.</p> :
//   filteredYear.map((expense) => (
//     <ExpenseList
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ))}
