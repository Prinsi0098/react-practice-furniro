import { createSlice } from "@reduxjs/toolkit";
import { removeFromCart } from "./CratItemSlice";

const initialState = {
  Wishlistitems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const WishlistSlice = createSlice({
  name: "wishlistItem",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.Wishlistitems.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.Wishlistitems = state.Wishlistitems.filter(
        (item) => item !== action.payload
      );
    },
  },

});

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions
export default WishlistSlice.reducer;