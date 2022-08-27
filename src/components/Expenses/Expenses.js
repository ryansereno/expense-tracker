import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2022");
  const setFilterYearHandler = (enteredYear) => {
    setEnteredYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === enteredYear;
  });

  let expensesContent = <p> No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      ></ExpenseItem>
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYear={setFilterYearHandler}
          selectedYear={enteredYear}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
