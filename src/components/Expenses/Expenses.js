import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [fileredYear, setFileredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFileredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={fileredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((expense, i) => {
        return (
          <ExpenseItem
            key={i}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
