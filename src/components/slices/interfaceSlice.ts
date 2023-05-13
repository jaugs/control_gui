import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface InterfaceState {
    isOpen: boolean,
    isMinimized: boolean,
    coords: {x: number, y: number},
    isDragging: boolean
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
         toggleMinimize: (state) => {
            state.isMinimized = !state.isMinimized
         },
         changeIntDragging: (state) => {
            state.isDragging = !state.isDragging
         },
         changeIntCoords: (state, action: PayloadAction<{coords: {x: number, y: number}}>) => {
            state.coords = {x: action.payload.coords.x, y: action.payload.coords.y}
         }

    }
});

export const { toggleCui, toggleMinimize, changeIntDragging, changeIntCoords } = interfaceSlice.actions

export const selectInterface = (state: RootState) => state.interface

export default interfaceSlice.reducer