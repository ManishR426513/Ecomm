import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const item = {
        id: action.payload.id,
        img: action.payload.images,
        qty: 1,
        price: action.payload.price,
        title: action.payload.title,
      };

      const itemIndex = state.cart.findIndex((e) => e.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].qty += 1;
      } else {
        state.cart.push(item);
      }
    },
    increaseQty: (state, action) => {
      const increaseItemQty = state.cart.findIndex(
        (e) => e.id === action.payload.id
      );

      if (increaseItemQty >= 0) {
        state.cart[increaseItemQty].qty += 1;
      }

      // No need to return a new state object here
    },
    deleteCartItem: (state, action) => {
        const deleteitemfromcart = state.cart.filter(
          (e) => e.id !== action.payload.id
        );
       return{
          ...state,
          cart:deleteitemfromcart
       }
      },
      
    decreaseQty: (state, action) => {
      
      const decreaseItemQty = state.cart.findIndex(
        (e) => e.id === action.payload.id
      );
      console.log(state.cart[decreaseItemQty].qty)
      if(state.cart[decreaseItemQty].qty==1){
        const deleteitemfromcart = state.cart.filter(
          (e) => e.id !== action.payload.id
        );
       return{
          ...state,
          cart:deleteitemfromcart
       }
      }else{
        state.cart[decreaseItemQty].qty += -1;
      }

     
    },

    


  },
});

export const { addCartItem, deleteCartItem,decreaseQty, deleteWholeCartItem, increaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;
