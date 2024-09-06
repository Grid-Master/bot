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
  },
});

export const { setUserPhone } = authSlice.actions;

export default authSlice.reducer;