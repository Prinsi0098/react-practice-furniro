import { configureStore } from '@reduxjs/toolkit';
import AllProductSlice from './AllProduct';
import CartItemSlice from './CratItemSlice';
import WishlistSlice from './WishlistSlice';

import BlogSlice from './BlogSlice';
const Store = configureStore({
  reducer: {
    products: AllProductSlice,
    CartItems: CartItemSlice,
    Wishlist: WishlistSlice,
    BlogItem: BlogSlice
  },

})


export default Store