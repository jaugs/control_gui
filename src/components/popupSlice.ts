import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'


// Define a type for the slice state
interface PopupState {
  PopupArr: [{
    isOpen: boolean,
    coords: {x: number, y: number},
    isDragging: boolean
  },]
}

// Define the initial state using that type
const initialState: PopupState = {
    PopupArr: [{
        isOpen: false,
        coords: {x: 50, y: 50},
        isDragging: false,
    },]
}

export const popupSlice = createSlice({
  name: 'PopupArr',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
    changeOpen: (state) => {
       state.PopupArr.map(p => {
            p.isOpen = !p.isOpen
        })
    },

    changeCoords: (state, action: PayloadAction<{coords: {x: number, y: number}, index: number}>) => {
        let result = state.PopupArr.filter
         state.PopupArr.filter() map(p => {
            p.coords = {x: action.payload.coords.x, y: action.payload.coords.y}
        })
    }

   
   
    // Use the PayloadAction type to declare the contents of `action.payload`
//    incrementByAmount: (state, action: PayloadAction<number>) => {
//        state.value += action.payload
//     },
  },
})


// Action creators are generated for each case reducer function
export const { changeOpen, changeCoords } = popupSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPopupArr = (state: RootState) => state.popup

export default popupSlice.reducer