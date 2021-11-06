import "./Expense.css";
import Card from "./Card";
import ExpenseList from "./ExpenseList";
function Expense(props) {
  let expenses = props.item;
  return (
    <Card>
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
