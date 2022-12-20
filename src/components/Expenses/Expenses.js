import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearSelect, setYearSelect] = useState("2020");

  const propsHandler = (selectYear) => {
    setYearSelect(selectYear);
  };
  const filterExpenses = props.items.filter((data) => {
    return data.date.getFullYear().toString() === yearSelect;
  });
  // let expressionItem = <p>There is no Content</p>;
  // if (filterExpenses.length > 0) {
  //   expressionItem = filterExpenses.map((index) => (
  //     <ExpenseItem
  //       key={index.id}
  //       title={index.items}
  //       amount={index.amount}
  //       date={index.date}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          initialYear={yearSelect}
          onPropsYearChange={propsHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
        {/* {expression Item} */}
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
