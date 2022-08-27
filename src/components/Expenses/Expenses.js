import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from './ExpensesList'

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2022");
  const setFilterYearHandler = (enteredYear) => {
    setEnteredYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === enteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYear={setFilterYearHandler}
          selectedYear={enteredYear}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
