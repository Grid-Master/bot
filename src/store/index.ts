import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../store/auth/authSlice";
import CartReducer from "../store/cart/cartSlice";

const store = configureStore({ reducer: { AuthReducer, CartReducer } });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
