import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


// Define a type for the slice state
interface PopupState {
  PopupArr: [{
    isOpen: boolean,
    coords: {x: number, y: number},
    isDragging: boolean
    contents: string
  },]
}

// Define the initial state using that type
const initialState: PopupState = {
    PopupArr: [{
        isOpen: false,
        coords: {x: 50, y: 50},
        isDragging: false,
        contents: ''
    },]
}

export const popupSlice = createSlice({
  name: 'popup',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
    changeOpen: (state, action: PayloadAction<number>) => {
       state.PopupArr.map((item, index) => {
         if (index !== action.payload) {
          return item
         }
         return item.isOpen = !item.isOpen
        })
    },

    changeDragging: (state, action: PayloadAction<number>) => {
      state.PopupArr.map((item, index) => {
        if (index !== action.payload) {
         return item
        }
        return item.isDragging = !item.isDragging
       })
   },

    changeCoords: (state, action: PayloadAction<{coords: {x: number, y: number}, index: number}>) => {
       state.PopupArr.map((item, index) => {
          if (index !== action.payload.index) {
            return item
          }
          return item.coords = { x: action.payload.coords.x, y: action.payload.coords.y}
       })
    },

    changeContent: (state, action: PayloadAction<{contents: string, index: number}>) => {
      state.PopupArr.map((item, index) => {
        if (index !== action.payload.index) {
         return item
        }
        return item.contents = action.payload.contents
       })
   },
    newPopup: (state, action: PayloadAction<{isOpen: boolean, coords: {x: number, y: number}, isDragging: boolean, contents: string}>) => {
      state.PopupArr.push(action.payload)
    },

 
  },
})


// Action creators are generated for each case reducer function
export const { changeOpen, changeCoords, changeDragging, newPopup, changeContent } = popupSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPopupArr = (state: RootState) => state.popup

export default popupSlice.reducer