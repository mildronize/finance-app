import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import BottomNavigation from '../../layouts/BottomNavigation';
import ExpenseListView from './ExpenseListView';
import Navbar from '../../layouts/Navbar';

import {
  selectExpense,
} from './expenseSlice';

const Expense = () => {
  const dispatch = useDispatch();
  const expense = useSelector(selectExpense);

  return (
    <div>
      <Navbar />
      <ExpenseListView data={expense} />
      <BottomNavigation />
    </div>
  );
};

export default Expense;
