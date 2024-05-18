import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const houseApi = createApi({
  baseQuery: fetchBaseQuery({
    reducerPath: "house-api",
    baseUrl: "https://zillow-com4.p.rapidapi.com/properties",
    prepareHeaders(headers) {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_API_KEY);
      headers.set("X-RapidAPI-Host", "zillow-com4.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPropertyDetails: builder.query({
      query: (id) => `?zpid=${id}`,
    }),
    getPropertyByLocation: builder.query({
      query: (location) => `/search?location=${location}`,
    }),
  }),
});
export const { useGetPropertyDetailsQuery, useGetPropertyByLocationQuery } =
  houseApi;
