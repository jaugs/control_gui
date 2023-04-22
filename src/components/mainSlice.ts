import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'


// Define a type for the slice state
interface MainWindowState {
  screen: string
}

// Define the initial state using that type
const initialState: MainWindowState = {
  screen: 'startup',
}

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
 
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeScreen: (state, action: PayloadAction<string>) => {
      state.screen = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const { changeScreen } = mainSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectScreen = (state: RootState) => state.main.screen

export default mainSlice.reducer