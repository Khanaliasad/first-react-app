import "./Card.css";

function Card(props) {
  const classes = props.classname + "Card";
  return <div className={classes}>{props.children}</div>;
}

export default Card;
