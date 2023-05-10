import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface InterfaceState {
    isOpen: boolean,
   
    layers: [{
        name: string,
        isActive: boolean,
    }],
}

const initialState: InterfaceState = {
    isOpen: false,
   
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
        toggleMap: (state) => {
            state.isOpen = !state.isOpen
         },

         

    }
});

export const { toggleMap,  } = interfaceSlice.actions

export const selectInterface = (state: RootState) => state.interface

export default interfaceSlice.reducer