import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Products } from "./Data";

// export const getProduct = createAsyncThunk(
//   "AllProducts/getProduct",
//   async (resolve) => {
//     const response = await resolve(Products);

//     return Products;
//   }
// )
const initialState = {
  products: Products,
  isLoading: false,
  status: 'idle',
  error: null
}
const AllProductSlice = createSlice({
  name: "AllProducts",
  initialState: initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getProduct.fulfilled, (state, action) => {
  //       state.status = "success";
  //       state.isLoading = false;
  //       state.products = action.payload

  //     })
  //     .addCase(getProduct.pending, (state) => {
  //       state.isLoading = true;
  //       state.status = "loading";
  //       state.error = null
  //     })
  //     .addCase(getProduct.rejected, (state) => {
  //       state.isLoading = false;
  //       state.status = "failed";
  //     })

  // }
});


export default AllProductSlice.reducer;