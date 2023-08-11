import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
        state.cart.push(action.payload)
        state.cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0);
      
    },
    
    
  },
})

// Action creators are generated for each case reducer function
export const { addtocart } = cartSlice.actions

export default cartSlice.reducer