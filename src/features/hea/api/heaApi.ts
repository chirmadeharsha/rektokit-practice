import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const heaApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL
  }),
  tagTypes: [],
  endpoints: builder => ({})
})

export const {} = heaApi
