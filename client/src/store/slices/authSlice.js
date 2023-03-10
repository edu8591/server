import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducer: {
    google: (state) => {
      console.log(state);
    },
  },
});

export const authReducer = authSlice.reducer;
