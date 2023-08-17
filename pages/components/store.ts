import authSlice from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

const RootReducers = combineReducers({
    auth : authSlice,
})

const store = configureStore({
    reducer: RootReducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatcher = typeof store.dispatch;
export default store;