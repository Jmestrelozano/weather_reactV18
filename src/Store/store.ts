import { configureStore } from "@reduxjs/toolkit";
import { ICountrySlice, IWeatherSlice } from "../Interfaces/interfaceSlices";
import { countrySlices } from "./Slices/countrySlices";
import { weatherSlices } from "./Slices/weatherSlices";

export interface storeInterface {
  country: ICountrySlice;
  weather: IWeatherSlice;
}

export const store = configureStore({
  reducer: {
    country: countrySlices.reducer,
    weather: weatherSlices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
