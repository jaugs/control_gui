import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface MapState {
    isOpen: boolean,
   
    layers: [{
        name: string,
        isActive: boolean,
    }],
}

const initialState: MapState = {
    isOpen: false,
   
    layers: [{
        name: 'base',
        isActive: true,
        
    },
        ],
}

export const mapSlice = createSlice({
    name: 'parkMap',
    initialState,
    reducers: {
        toggleMap: (state) => {
            state.isOpen = !state.isOpen
         },

         

    }
});

export const { toggleMap,  } = mapSlice.actions

export const selectMap = (state: RootState) => state.map

export default mapSlice.reducer