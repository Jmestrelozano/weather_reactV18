import {
  AnyAction,
  configureStore,
  MiddlewareArray,
  StoreEnhancer,
  ThunkMiddleware,
} from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { ICountrySlice, IWeatherSlice } from "../Interfaces/interfaceSlices";
import { countrySlices } from "./Slices/countrySlices";
import { weatherSlices } from "./Slices/weatherSlices";

export interface storeInterface {
  country: ICountrySlice;
  weather: IWeatherSlice;
}
export const store = configureStore<
  storeInterface,
  AnyAction,
  MiddlewareArray<[ThunkMiddleware<any, AnyAction, undefined>]>,
  [StoreEnhancer<{}, {}>]
>({
  reducer: { country: countrySlices.reducer, weather: weatherSlices.reducer },
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
