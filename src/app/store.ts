import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { modalSlice } from '../components/slices/modalSlice'
import { mainSlice } from '../components/slices/mainSlice'
import  {popupSlice} from '../components/slices/popupSlice'
import {mapSlice} from '../components/slices/mapSlice'
import {interfaceSlice} from '../components/slices/interfaceSlice'
import { controlApi } from '../components/slices/apiSlice'

const store = configureStore({
  reducer: {
    [controlApi.reducerPath]: controlApi.reducer,
    interface: interfaceSlice.reducer,
    modal: modalSlice.reducer,
    main: mainSlice.reducer,
    popup: popupSlice.reducer,
    map: mapSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(controlApi.middleware),
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch