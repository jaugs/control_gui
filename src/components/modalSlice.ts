import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'


// Define a type for the slice state
interface ModalState {
  currentPopup: number,
  isOpen1: boolean,
  isOpen2: boolean,
  isOpen3: boolean,
  isOpen4: boolean,
  IsDragging1: boolean,
  IsDragging2: boolean,
  IsDragging3: boolean,
  IsDragging4: boolean,
  coord1: {x: number,
           y: number},
  coord2: {x: number,
           y: number},
  coord3: {x: number,
           y: number},
  coord4: {x: number,
           y: number},
  
}

// Define the initial state using that type
const initialState: ModalState = {
  currentPopup: 0,
  isOpen1: false,
  isOpen2: false,
  isOpen3: false,
  isOpen4: false,
  IsDragging1: false,
  IsDragging2: false,
  IsDragging3: false,
  IsDragging4: false,
  coord1: {x: 400, y: 300},
  coord2: {x: 300, y: 300},
  coord3: {x: 300, y: 300},
  coord4: {x: 300, y: 300},
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
    startDragging1: (state) => {
      state.IsDragging1 = true
    },
    stopDragging1: (state) => {
      state.IsDragging1 = false
    },
    startDragging2: (state) => {
      state.IsDragging2 = true
    },
    stopDragging2: (state) => {
      state.IsDragging2 = false
    },
    startDragging3: (state) => {
      state.IsDragging3 = true
    },
    stopDragging3: (state) => {
      state.IsDragging3 = false
    },
    startDragging4: (state) => {
      state.IsDragging4 = true
    },
    stopDragging4: (state) => {
      state.IsDragging4 = false
    },
    handleContainerDrop1: (state, action: PayloadAction<{coords: {x: number, y: number}}>) => {
        state.coord1 = {x: action.payload.coords.x,
                        y: action.payload.coords.y}
    },
    handleContainerDrop2: (state, action: PayloadAction<{coords: {x: number, y: number}}>) => {
      state.coord2 = {x: action.payload.coords.x,
                      y: action.payload.coords.y}
    },
    handleContainerDrop3: (state, action: PayloadAction<{coords: {x: number, y: number}}>) => {
      state.coord3 = {x: action.payload.coords.x,
                      y: action.payload.coords.y}
    },
    handleContainerDrop4: (state, action: PayloadAction<{coords: {x: number, y: number}}>) => {
      state.coord4 = {x: action.payload.coords.x,
                      y: action.payload.coords.y}
    },
    currentPopup: (state, action: PayloadAction<number>) => {
      state.currentPopup = action.payload
    },
    
  },
})


// Action creators are generated for each case reducer function
export const { open1, close1, open2, close2, open3, close3, open4, close4, 
  startDragging1, stopDragging1, startDragging2, stopDragging2, 
  startDragging3, stopDragging3, startDragging4, stopDragging4, 
  handleContainerDrop1, handleContainerDrop2, handleContainerDrop3, handleContainerDrop4, currentPopup } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectModal = (state: RootState) => state.modal

export default modalSlice.reducer