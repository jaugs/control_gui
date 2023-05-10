import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface MainWindowState {
  screen: string
}

const initialState: MainWindowState = {
  screen: 'startup',
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
 
    changeScreen: (state, action: PayloadAction<string>) => {
      state.screen = action.payload
    },
  },
})

export const { changeScreen } = mainSlice.actions

export const selectScreen = (state: RootState) => state.main.screen

export default mainSlice.reducer