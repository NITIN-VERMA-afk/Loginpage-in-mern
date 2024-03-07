import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/Counterslice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})