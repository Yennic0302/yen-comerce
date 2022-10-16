import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const productsCartReducer = createSlice({
  name: "products-cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const productCart = state.cart.find(
        (product) => product.id === action.payload.id
      );

      return productCart
        ? {
            cart: state.cart.map((product) =>
              product.id === productCart.id
                ? { ...productCart, items: product.items + 1 }
                : product
            ),
            totalPrice: state.totalPrice + productCart.price,
          }
        : {
            cart: [...state.cart, action.payload],
            totalPrice: state.totalPrice + action.payload.price,
          };
    },
    REMOVE_ONE_TO_CART: (state, action) => {
      const productToRemove = state.cart.find(
        (product) => product.id === action.payload
      );

      return productToRemove.items > 1
        ? {
            cart: state.cart.map((product) =>
              product.id === productToRemove.id
                ? { ...productToRemove, items: product.items - 1 }
                : product
            ),
            totalPrice: state.totalPrice - productToRemove.price,
          }
        : {
            cart: state.cart.filter(
              (product) => product.id !== productToRemove.id
            ),
            totalPrice: state.totalPrice - productToRemove.price,
          };
    },
    REMOVE_ALL_TO_CART: (state, action) => {
      const productToRemove = state.cart.find(
        (product) => product.id === action.payload
      );
      const totalProductPrice = productToRemove.price * productToRemove.items;
      return {
        cart: state.cart.filter((product) => product.id !== productToRemove.id),
        totalPrice: state.totalPrice - totalProductPrice,
      };
    },
    CLEAR_CART: () => initialState,
  },
});

export const {
  ADD_TO_CART,
  REMOVE_ONE_TO_CART,
  REMOVE_ALL_TO_CART,
  CLEAR_CART,
} = productsCartReducer.actions;
export default productsCartReducer.reducer;
