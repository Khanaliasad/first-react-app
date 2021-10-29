import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function Expense(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <Card>
          <button className='expense-item__price'>Change Item</button>
        </Card>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default Expense;
