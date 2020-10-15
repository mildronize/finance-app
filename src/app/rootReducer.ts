import { combineReducers } from '@reduxjs/toolkit'
import expenseReducer from '../pages/expense/expenseSlice';

const rootReducer = combineReducers({
    expense: expenseReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;