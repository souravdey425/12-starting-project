import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState("false");
  const SetExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const isEditingHandler = () => {
    setIsEditing("true");
  };
  const isCancelHandler = () => {
    setIsEditing("false");
  };
  return (
    <div className="new-expense ">
      {isEditing === "false" ? (
        <button onClick={isEditingHandler}>Add Expense Button</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={SetExpenseData}
          onCancelFrom={isCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
