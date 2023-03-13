import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: { id: "", googleId: "" },
  reducers: {
    google: (state, action) => {},
    logout: (state, { payload }) => {
      console.log(payload);
      state.id = "";
      state.googleId = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state = { ...payload };
      }
    );
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
