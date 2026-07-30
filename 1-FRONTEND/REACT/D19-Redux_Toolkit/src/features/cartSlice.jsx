import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    cartItems: null
  },

  reducers: {
    addCartItems: (state, action) => {
      state.cartItems = action.payload
    },
    removeCartItems: (state) => {
      state.cartItems = null
    }
  }
})

export const { addCartItems, removeCartItems } = cartSlice.actions
export default cartSlice.reducer