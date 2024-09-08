import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryCard } from "../../pages/category/categoryCard";

export const cartInitialState: ICategoryCard[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addInCart: (state, { payload }: PayloadAction<ICategoryCard>) => {
      state.push(payload);
    },
    removeFromCart: (state, { payload }: PayloadAction<ICategoryCard>) => {
      state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addInCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
