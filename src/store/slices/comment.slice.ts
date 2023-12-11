import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IComment {
    choice : string,
}

const initialState : IComment = {
    choice : '',
}

const CommentSlice = createSlice({
    name: 'Comment',
    initialState,
    reducers: {
        setComment: (state, action : PayloadAction<IComment>) => {
            state.choice = action.payload.choice
        }
    }
})

export const { setComment } = CommentSlice.actions
export const selectComment = (state : RootState) => state.comment
export default CommentSlice.reducer