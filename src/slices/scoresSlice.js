import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice=createSlice({
    name:"scores",
    initialState:[0,0,0,0,0],
    reducers:{
        addScore:(state,action)=>{
            state.push(action.payload);
        }
    }
}) 

export const {addScore} =scoreSlice.actions;

export default scoreSlice.reducer;

