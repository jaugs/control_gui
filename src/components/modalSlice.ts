import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'


// Define a type for the slice state
interface ModalState {
  isOpen1: boolean,
  isOpen2: boolean,
  isOpen3: boolean,
  isOpen4: boolean,
}

// Define the initial state using that type
const initialState: ModalState = {
  isOpen1: false,
  isOpen2: false,
  isOpen3: false,
  isOpen4: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    open1: (state) => {
      state.isOpen1 = true
    },
    close1: (state) => {
      state.isOpen1 = false
    },
    open2: (state) => {
      state.isOpen2 = true
    },
    close2: (state) => {
      state.isOpen2 = false
    },
    open3: (state) => {
      state.isOpen3 = true
    },
    close3: (state) => {
      state.isOpen3 = false
    },
    open4: (state) => {
      state.isOpen4 = true
    },
    close4: (state) => {
      state.isOpen4 = false
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})


// Action creators are generated for each case reducer function
export const { open1, close1, open2, close2, open3, close3, open4, close4, } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectModal = (state: RootState) => state.modal

export default modalSlice.reducer