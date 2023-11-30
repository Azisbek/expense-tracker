import React from "react";
import Expensedate from "./Expensedate";
import "./Expenseitem.css";

function Expenseitem(props) {
  const title = props.title;
  const price = props.price;

  return (
    <div className="expense-item">
      <Expensedate date={props.date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">{price}$</div>
    </div>
  );
}

export default Expenseitem;
