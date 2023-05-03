import { createSlice } from "@reduxjs/toolkit";

export const currUserSlice=createSlice({
    name:"currUser",
    initialState:[],
    reducers:{
        setUser:(state,action)=>{
            state.push(action.payload)
        }
    }
}) 

export const {setUser} =currUserSlice.actions;

export default currUserSlice.reducer;

