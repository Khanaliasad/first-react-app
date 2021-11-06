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
      <ExpenseList
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseList>
      <ExpenseList
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseList>
      <ExpenseList
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseList>
      <ExpenseList
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseList>
    </Card>
  );
}
export default Expense;
