import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        console.log(state.cart)
        
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.product_quantity++;
      } else {
        state.cart.push({ ...action.payload, product_quantity: 1 });
      }
    
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      item.product_quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item.product_quantity === 1) {
        item.product_quantity = 1;
      } else {
        item.product_quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload
      );
      state.cart = removeItem;
    },
    removeAllItems: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAllItems,
} = cartSlice.actions;
