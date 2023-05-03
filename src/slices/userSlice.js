import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:"users",
    initialState:[{email:"vinay@gmail.com",password:1234,score:0,levels:0},{email:"john@gmail.com",password:1234,score:50,levels:1},{email:"rock@gmail.com",password:1234,score:90,levels:2},{email:"ram@gmail.com",password:1234,score:0,levels:0},{email:"raju@gmail.com",password:1234,score:50,levels:1}],
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
        }
        
    }
}) 

export const {addUser} =userSlice.actions;
export const {updateUser} =userSlice.actions;
export default userSlice.reducer;

