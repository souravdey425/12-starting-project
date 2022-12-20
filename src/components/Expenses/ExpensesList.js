import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  return (
    <>
      {props.items === 0 ? (
        <p>There is no Content</p>
      ) : (
        props.items.map((index) => (
          <ExpenseItem
            key={index.id}
            title={index.items}
            amount={index.amount}
            date={index.date}
          />
        ))
      )}
    </>
  );
};

export default ExpensesList;
