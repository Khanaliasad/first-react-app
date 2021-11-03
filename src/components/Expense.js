import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function Expense(props) {
  // console.log(props.item)
  const exp_date = new Date(2021, 9, 26);
  //const exp_title = "Car Insurance";
  const exp_price = 260;
  const Title = props.item[0].title;
  let objlen = Object.keys(props.item).length;
  const asad = () => {
    for (let i = 0; i < objlen; i++) {
      console.log(props.item[i]);
      let expenseitem = (
        <div className="expense-item">
          <ExpenseDate date={props.item[i].date} />
          <div className="expense-item__description">
            <h2>{props.item[i].title}</h2>
            <div className="expense-item__price">${props.item[i].amount}</div>
          </div>
        </div>
      );
      return expenseitem;
    }
  };

  return (
    <Card>
      {asad}
      <div className="expense-item">
        <ExpenseDate date={exp_date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{Title}</h2>
          {/* <Card>
              <button className="expense-item__price" onClick={Click_Handeler}>
                Change Item
              </button>
            </Card> */}
          <div className="expense-item__price">${exp_price}</div>
        </div>
      </div>
    </Card>
  );
}
export default Expense;
