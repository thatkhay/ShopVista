import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import cartReducer from './cart'

export const store = configureStore({
  reducer: {
  counter: counterReducer,
  cart: cartReducer,

  },
})