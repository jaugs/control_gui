import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface InterfaceState {
    isOpen: boolean,
    isMinimized: boolean,
    coords: {x: number, y: number},
    isDragging: boolean,
    isLoading: boolean,
    active_object_index: any,
    active_inventory: Array<object>,
    section: string,
    id: string,
    isEditing: boolean,
    addFormOpen: boolean,
    orderFormOpen: boolean,
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
    active_inventory: [],
    section: '',
    id: '',
    isEditing: false,
    addFormOpen: false,
    orderFormOpen: false,
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
         addToActiveInventory: (state, action: PayloadAction<object>) => {
            state.active_inventory = [...state.active_inventory, action.payload]
         },
         removeActiveInventory: (state, action: PayloadAction<string>) => {
            const removedName = action.payload;
            state.active_inventory = state.active_inventory.filter((item: any) => item.name !== removedName);
            
         },
         toggleAddForm: (state) => {
            state.addFormOpen = !state.addFormOpen
         },
         toggleOrderForm: (state) => {
            state.orderFormOpen = !state.orderFormOpen
         },
         toggleIsEditing: (state) => {
            state.isEditing = !state.isEditing
         },
    }
});

export const { toggleCui, toggleMinimize, toggleLoading, addToActiveInventory, toggleAddForm, 
               toggleOrderForm, toggleIsEditing, changeIntDragging, changeIntCoords, changeSection, 
               changeID, closeActiveObjectIndex, openActiveObjectIndex, removeActiveInventory } = interfaceSlice.actions

export const selectInterface = (state: RootState) => state.interface

export default interfaceSlice.reducer