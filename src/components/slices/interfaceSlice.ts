import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface InterfaceState {
    isOpen: boolean,
    isMinimized: boolean,
    coords: {x: number, y: number},
    isDragging: boolean,
    isLoading: boolean,
    section: string,
    id: string,
    isEditing: boolean,
    layers: [{
        name: string,
        isActive: boolean,
    }],
}

const initialState: InterfaceState = {
    isOpen: false,
    isMinimized: false,
    coords: {x: 180, y: 270},
    isDragging: false,
    isLoading: false,
    section: '',
    id: '',
    isEditing: false,
    layers: [{
        name: 'base',
        isActive: true,
        
    },
        ],
}

export const interfaceSlice = createSlice({
    name: 'interface',
    initialState,
    reducers: {
        toggleCui: (state) => {
            state.isOpen = !state.isOpen
         },
        toggleLoading: (state) => {
            state.isLoading = !state.isLoading
         },
         toggleMinimize: (state) => {
            state.isMinimized = !state.isMinimized
         },
         changeIntDragging: (state) => {
            state.isDragging = !state.isDragging
         },
         changeIntCoords: (state, action: PayloadAction<{coords: {x: number, y: number}}>) => {
            state.coords = {x: action.payload.coords.x, y: action.payload.coords.y}
         },
         changeSection: (state, action: PayloadAction<string>) => {
            state.section = action.payload
         },
         changeID: (state, action: PayloadAction<string>) => {
            state.id = action.payload
         },
         toggleIsEditing: (state) => {
            state.isEditing = !state.isEditing
         },
    }
});

export const { toggleCui, toggleMinimize, toggleLoading, toggleIsEditing, changeIntDragging, changeIntCoords, changeSection, changeID } = interfaceSlice.actions

export const selectInterface = (state: RootState) => state.interface

export default interfaceSlice.reducer