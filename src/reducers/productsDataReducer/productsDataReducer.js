import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const productsDataReducer = createSlice({
  name: "products-data",
  initialState,
  reducers: {
    GET_DATA: (state, action) => action.payload.products,
  },
});

export const { GET_DATA } = productsDataReducer.actions;
export default productsDataReducer.reducer;
