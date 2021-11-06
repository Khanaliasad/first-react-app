import "./Expense.css";
import Card from "./Card";
import ExpenseList from "./ExpenseList";
function Expense(props) {
  let expenses = props.item;

  //  let objlen = Object.keys(props.item).length;
  // const asad = () => {
  //   for (let i = 0; i < objlen; i++) {
  //     console.log(props.item[i]);
  //     let expenseitem = (
  //       <div className="expense-item">
  //         <ExpenseDate date={props.item[i].date} />
  //         <div className="expense-item__description">
  //           <h2>{props.item[i].title}</h2>
  //           <div className="expense-item__price">${props.item[i].amount}</div>
  //         </div>
  //       </div>
  //     );
  //     return expenseitem;
  //   }
  // };

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
