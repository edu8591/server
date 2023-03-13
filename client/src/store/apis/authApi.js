import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({ query: (id) => "/api/current_user" }),
  }),
});

export { authApi };
export const { useGetCurrentUserQuery } = authApi;
