import "./Expense.css";

function Expense() {
    const exp_date = new Date(2021,9,26);
    const exp_title= "Car Insurance";
    const exp_price=260;
  return (
    <div className="expense-item" >
      <div>{exp_date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{exp_title}</h2>
        <div className="expense-item__price ">${exp_price}</div>
      </div>
    </div>
  );
}
export default Expense;
