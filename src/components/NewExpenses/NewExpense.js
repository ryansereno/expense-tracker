import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData); //onSaveExpensesData is defined in this components parent, and passed to this component as a prop, hance it being a method on prop. This allows data to be passed up to its parent- in this case App.js
  };

  const closeForm = () => {
    setShowForm(false);
  };
  const openForm = () => {
    setShowForm(true);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={openForm}>Add New Expense</button>}
      {showForm && (
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClose={closeForm} />
      )}
    </div>
  );
};

export default NewExpense;
