import React from "react";
import Card from "../Card";
import "./ExpenseFilter.css";
import ExpenseList from "../ExpenseList";
import Option from "./Option";
function ExpenseFilter(props) {
  const DropdownHandeler = (event) => {
    //   console.log(props.arrforoptions);
    props.onChangeFilter(event.target.value);
  };


  return (
    <Card className="">
      <div className="expenses-filter expenses-filter__all">
        <div className="expenses-filter__control">
          <label>filter by year</label>
         
          <select value={props.select} onChange={DropdownHandeler}>
         
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
         
        </div>
      </div>
     
             
           
    </Card>
  );
}

export default ExpenseFilter;
