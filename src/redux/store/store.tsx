import { configureStore } from '@reduxjs/toolkit';

import { filterSlice } from '../slices';


export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
