import { createSlice } from "@reduxjs/toolkit";

export const levelSlice=createSlice({
    name:"levels",
    initialState:[{}],
    reducers:{
        addLevel:(state,action)=>{
            state.push(action.payload);
        }
    }
}) 

export const {addLevel} =levelSlice.actions;

export default levelSlice.reducer;

