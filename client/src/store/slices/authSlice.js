import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: { id: "", googleId: "" },
  reducers: {
    logout: (state, { payload }) => {
      state.id = "";
      state.googleId = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        if (payload !== null) {
          state.id = payload._id;
          state.googleId = payload.googleId;
        }
      }
    );
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
