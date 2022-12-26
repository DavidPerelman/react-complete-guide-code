import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [show, setShow] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  const showForm = () => {
    setShow(true);
  };

  if (show === false) {
    return (
      <div className='new-expense'>
        <button
          onClick={() => {
            showForm();
          }}
        >
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <div className='new-expense'>
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        setShow={setShow}
      />
    </div>
  );
};

export default NewExpense;
