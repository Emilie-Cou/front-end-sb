import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IConnect {
    idClasse : string,
}

const initialState : IConnect = {
    idClasse : 'P1A',
}

const ConnectSlice = createSlice({
    name: 'Connect',
    initialState,
    reducers: {
        setConnect: (state, action : PayloadAction<IConnect>) => {
            state.idClasse = action.payload.idClasse
        }
    }
})

export const { setConnect } = ConnectSlice.actions
export const selectConnect = (state : RootState) => state.connect
export default ConnectSlice.reducer