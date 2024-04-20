import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ITicket } from '@interface/';


export const ticketsApi = createApi({
  reducerPath: 'ticketsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.PUBLIC_URL }),
  tagTypes: ['Tickets'],
  endpoints: (builder) => ({
    getTickets: builder.query<{ tickets: ITicket[] }, void>({
      query: () => '/tickets.json',
      providesTags: ['Tickets'],
    }),
  }),
});

export const { useGetTicketsQuery } = ticketsApi;
