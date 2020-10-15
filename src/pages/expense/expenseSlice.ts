import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';
// import Expense from './Expense';

// type StateType = { value: number };
// const initialState: StateType = []
export interface Expense {
  id: number;
  title: string;
}
const initialState: Expense[] = [
  { id: 0, title: "Buy some stuff" },
  { id: 1, title: "Running" },
];

export const counterSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense(state, action: PayloadAction<Expense>) {
      state.push(action.payload);
    },
  },
});


export const { addExpense } = counterSlice.actions;

export const selectExpense = (state: RootState) => state.expense;

export default counterSlice.reducer;
