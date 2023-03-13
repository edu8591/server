import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    google: (state, action) => {},
  },
});
export const authReducer = authSlice.reducer;
