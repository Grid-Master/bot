import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../common/interfaces/auth";

export const authInitialState: AuthState = {
  isLoading: false,
  authInfo: {
    phone: null,
  },
};

export const authSlice = createSlice({
  name: "authData",
  initialState: authInitialState,
  reducers: {
    setUserPhone: (state, { payload }: PayloadAction<string>) => {
      state.authInfo.phone = payload;
    },
    clearUserPhone: (state) => {
      state.authInfo.phone = null;
    },
  },
});

export const { setUserPhone, clearUserPhone } = authSlice.actions;

export default authSlice.reducer;
