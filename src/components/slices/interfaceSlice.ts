import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface InterfaceState {
    isOpen: boolean,
    isMinimized: boolean,
    coords: {x: number, y: number},
    isDragging: boolean,
    isLoading: boolean,
    active_object_index: any,
    section: string,
    id: string,
    isEditing: boolean,
    addFormOpen: boolean,
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
    active_object_index: {},
    section: '',
    id: '',
    isEditing: false,
    addFormOpen: false,
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
         closeActiveObjectIndex: (state, action: PayloadAction<string>) => {
            state.active_object_index = {...state.active_object_index, [action.payload]: false}
         },
         openActiveObjectIndex: (state, action: PayloadAction<string>) => {
            state.active_object_index = {...state.active_object_index, [action.payload]: true}
         },
         toggleAddForm: (state) => {
            state.addFormOpen = !state.addFormOpen
         },
         toggleIsEditing: (state) => {
            state.isEditing = !state.isEditing
         },
    }
});

export const { toggleCui, toggleMinimize, toggleLoading, toggleAddForm, toggleIsEditing, changeIntDragging, changeIntCoords, changeSection, changeID, closeActiveObjectIndex, openActiveObjectIndex } = interfaceSlice.actions

export const selectInterface = (state: RootState) => state.interface

export default interfaceSlice.reducer