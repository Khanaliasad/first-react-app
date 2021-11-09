import Expense from "./components/Expense";
import NewExpense from "./components/NewExpence/NewExpense";
import "./App.css";
import Card from "./components/Card";
import ExpenseFilter from "./components/Filter/ExpenseFilter";
import React, { useState } from "react";

//import Header from "./components/Header";

let Dummy_Data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  let symb = ">";
const [Expenses, setExpenses] = useState(Dummy_Data)

  const formExpenceDataHandeler = (data) => {
   setExpenses((PrevExpenses) => {
    return [data, ...PrevExpenses]; 
   })
  };
  return (
    <div className="App">
      <div>
        <NewExpense formExpenceData={formExpenceDataHandeler} />
        <Card>
          <Expense item={Expenses} />
          <div className="notes">
            <p>
              on 5th module 3rd Last Video <br></br>
              
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default App;
