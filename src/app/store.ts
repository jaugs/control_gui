import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../components/counterSlice'
import { modalSlice } from '../components/modalSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    modal: modalSlice.reducer,
  },
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch