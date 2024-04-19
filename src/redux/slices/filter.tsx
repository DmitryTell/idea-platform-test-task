import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface IFilterProps {
  currency: string;
  stops: number[] | null;
}

const initialState: IFilterProps = {
  currency: 'rub',
  stops: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<{ currency: string }>) {
      const { currency } = action.payload;

      state.currency = currency;
    },
    setStops(state, action: PayloadAction<{ stops: number[] | null; currentStop: number | null }>) {
      const { stops, currentStop } = action.payload;

      if (!stops) {
        state.stops = stops;
        return;
      }

      if (stops && currentStop !== null) {
        if (stops.includes(currentStop)) {
          const index = stops.indexOf(currentStop);

          stops.splice(index, 1);

          state.stops = stops.length ? [...stops] : null;
        } else {
          state.stops = [...stops, currentStop];
        }
      }
    },
  },
});

export const { setCurrency, setStops } = filterSlice.actions;
