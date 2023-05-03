import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import currUserReducer from './slices/curruserSlice';
import scoresReducer from "./slices/scoresSlice";
import levelReducer from "./slices/levelSlice";
export const store=configureStore({
    reducer:{
        users:userReducer,
        currUser:currUserReducer,
        scores:scoresReducer,
        levels:levelReducer
    }
})