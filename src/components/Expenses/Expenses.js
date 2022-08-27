import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2019");
  const setFilterYearHandler = (enteredYear) => {
    setEnteredYear(enteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYear={setFilterYearHandler}
          selectedYear={enteredYear}
        />
        {props.items.map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            ></ExpenseItem>
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
