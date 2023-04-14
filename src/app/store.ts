import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../components/counterSlice'


export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})