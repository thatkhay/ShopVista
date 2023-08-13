import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  cartNo: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        if (state.count < 9) {
            state.count++;
          }
      
    },
    decrement: (state) => {
        if (state.count > 0) {
            state.count--;
          }
    
      
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
