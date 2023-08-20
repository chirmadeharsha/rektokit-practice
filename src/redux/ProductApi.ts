import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    tagTypes: ["Get"],
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => "products",
          }),
    }),
  });
  
export const {useGetAllProductQuery} = productApi;