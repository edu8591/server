import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { authApi } from "./apis/authApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);

export { useGetCurrentUserQuery } from "./apis/authApi";
