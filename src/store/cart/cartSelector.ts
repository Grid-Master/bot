import { RootState } from "..";


export const selectCartItems = (state: RootState) => state.CartReducer;

export const selectTotalPrice = (state: RootState) => {
    return state.CartReducer.reduce((total, item) => total + item.price * item.count, 0);
  };