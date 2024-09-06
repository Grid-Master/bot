import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../store/auth/authSlice";

const store = configureStore({ reducer: { AuthReducer } });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
