import { configureStore } from "@reduxjs/toolkit"
import commentReducer from "./slices/comment.slice"
import connectReducer from "./slices/connect.slice"

export const store = configureStore({
    reducer: {
        comment : commentReducer,
        connect : connectReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch