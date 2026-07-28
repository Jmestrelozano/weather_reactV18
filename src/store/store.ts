import { configureStore } from "@reduxjs/toolkit";
import { countrySlice } from "./country/slice/country.slice";
import { weatherSlice } from "./weather/slice/weather.slice";

export const store = configureStore({
  reducer: {
    country: countrySlice.reducer,
    weather: weatherSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
