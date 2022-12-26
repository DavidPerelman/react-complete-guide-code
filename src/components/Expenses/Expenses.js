import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = ({ expenses }) => {
  const [fileredYear, setFileredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFileredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === fileredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={fileredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
