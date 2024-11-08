import { Restaurant } from '../model/typeRestaurant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PurchasePayload } from '../model/typePurchase';

const apiSlice = createApi({
  reducerPath: 'restaurant api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/',
  }),
  tagTypes: ['Restaurant'],
  endpoints: builder => ({
    getRestaurant: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
      providesTags: ['Restaurant'],
    }),
    getRestaurantID: builder.query<Restaurant, number>({
      query: (id: number) => `restaurantes/${id}`,
      providesTags: ['Restaurant'],
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: body => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetRestaurantQuery,
  useGetRestaurantIDQuery,
  usePurchaseMutation,
} = apiSlice;
export default apiSlice;
