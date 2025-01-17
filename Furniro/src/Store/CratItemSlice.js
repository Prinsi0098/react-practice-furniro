import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cartitems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const CartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart(state, action) {
      // console.log("action.payload", action.payload);

      state.Cartitems.push(action.payload);
    },
    removeFromCart(state, action) {

      state.Cartitems = state.Cartitems.filter(item => item !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = CartItemSlice.actions
export default CartItemSlice.reducer