import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryCard } from "../../pages/category/categoryCard";

export const cartInitialState: ICategoryCard[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addInCart: (state, { payload }: PayloadAction<ICategoryCard>) => {
      const findItem = state.find((obj) => obj.id === payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.push({
          ...payload,
          count: 1,
        });
      }
    },
    minusFromCart: (state, action: PayloadAction<string>) => {
      const findItem = state.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },
    removeFromCart:(state, action: PayloadAction<string>) => {
      const index = state.findIndex((obj) => obj.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1); // Удаляем один элемент по индексу
      }
    },
  },
});

export const { addInCart, minusFromCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
