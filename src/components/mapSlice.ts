import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface MapState {
    isOpen: boolean,
    isDragging: boolean,
    coords: {x: number, y: number},
    layers: [{
        name: string,
        isActive: boolean,
        src: string,
    }],
}

const initialState: MapState = {
    isOpen: false,
    isDragging: false,
    coords: {x: 700, y: 70},
    layers: [{
        name: 'base',
        isActive: true,
        src: 'map'
    },],
}

export const mapSlice = createSlice({
    name: 'parkMap',
    initialState,
    reducers: {
        toggleMap: (state) => {
            state.isOpen = !state.isOpen
         },

         toggleDragging: (state) => {
            state.isDragging = !state.isDragging
         },

         changeMapCoords: (state, action: PayloadAction<{coords: {x: number, y: number}}>) => {
            state.coords = {x: action.payload.coords.x, y: action.payload.coords.y}
         },

    }
});

export const { toggleMap, toggleDragging, changeMapCoords } = mapSlice.actions

export const selectMap = (state: RootState) => state.map

export default mapSlice.reducer