import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({ query: () => "/api/current_user" }),
  }),
});

export { authApi };
export const { useGetCurrentUserQuery } = authApi;
