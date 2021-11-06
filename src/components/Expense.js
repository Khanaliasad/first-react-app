import "./Expense.css";
import Card from "./Card";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from './Filter/ExpenseFilter'
import React, {useState} from 'react'


function Expense(props) {
  const [FilteredYear, setFilteredYear] = useState(2020)
  let expenses = props.item;
  const ExpenseFilterHandeler = (event) => {
    // console.log('filter event detected' + event)
    setFilteredYear(event)
  } 

  return (
    <Card>
      <ExpenseFilter select={FilteredYear} onChangeFilter={ExpenseFilterHandeler} />
      {expenses.map((expense) => (
        <ExpenseList
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default Expense;
