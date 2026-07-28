import { configureStore } from "@reduxjs/toolkit";
import { countrySlices } from "./slices/countrySlices";
import { weatherSlices } from "./slices/weatherSlices";

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
