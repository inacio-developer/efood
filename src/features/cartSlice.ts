import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Menu } from '../model/typeMenu';
import { convertReal } from '../utils/convertReal';

type State = {
  products: Menu[];
  count: number;
  totalV: string;
};

const initialState: State = {
  products: [],
  count: 0,
  totalV: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      state.products.push({ ...action.payload, id: state.products.length + 1 });
      state.count++;
    },
    remove: (state, action: PayloadAction<Menu>) => {
      state.products = state.products.filter(p => p.id !== action.payload.id);
      state.count--;
    },
    removeAll: state => {
      state.products = [];
      state.count = 0;
      state.totalV = '0';
    },
    total: state => {
      state.totalV = convertReal(
        state.products.reduce((acc, { preco }) => acc + preco, 0),
      );
    },
  },
});

export const { add, remove, removeAll, total } = cartSlice.actions;
export default cartSlice.reducer;
