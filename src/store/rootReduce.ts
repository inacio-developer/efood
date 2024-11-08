import { combineReducers } from '@reduxjs/toolkit';
import apiSlice from '../services/api';
import cart from '../features/cartSlice';

const rootReduce = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  cart,
});

export type RootReduceType = ReturnType<typeof rootReduce>;
export default rootReduce;
