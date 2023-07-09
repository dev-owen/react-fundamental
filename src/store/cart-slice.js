import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) { /*TODO- 여기에 코드를 작성해 주세요*/},
    removeItemFromCart(state, action) { /*TODO- 여기에 코드를 작성해 주세요*/},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
