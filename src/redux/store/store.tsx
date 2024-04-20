import { configureStore } from '@reduxjs/toolkit';

import { filterSlice } from '../slices';
import { ticketsApi } from '../services';


export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [ticketsApi.reducerPath]: ticketsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ticketsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
