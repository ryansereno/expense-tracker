
import React, { useState  } from 'react'
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)
    //state is evaluated on a PER COMPONENT basis; separate instances of the same component have SEPARATE state
    const clickHandler = () =>{
       setTitle('clicked') 
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
