import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getSuggestions: builder.mutation({
      query: (questionObject) => ({
        url: "",
        method: "post",
        body: questionObject,
      }),
    }),
  }),
});

export const { useGetSuggestionsMutation } = apiSlice;
