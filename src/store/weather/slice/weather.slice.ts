import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeStatus } from "../../../global/status";
import { ITimeZone } from "../../../interfaces/slices.interface";
import { IWeatherByCity } from "../../../interfaces/weather-by-city.interface";
import { alertSuccess } from "../../../utils/alertSuccess";
import { weatherInitialState } from "./weather.initial-state";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: weatherInitialState,
  reducers: {
    loadWeatherCity: (state) => {
      state.wheatherCity.status = typeStatus.LOADING;
    },
    wheatherCity: (state, action: PayloadAction<IWeatherByCity>) => {
      state.wheatherCity.data = [action.payload];
      state.wheatherCity.status = typeStatus.SUCCESS;
      alertSuccess();
    },
    errWeatherCity: (state) => {
      state.wheatherCity.data = [];
      state.wheatherCity.status = typeStatus.FAILURE;
    },
    loadWeatherForecast: (state) => {
      state.wheatherForecast.status = typeStatus.LOADING;
    },
    getWheatherForecast: (state, action: PayloadAction<ITimeZone>) => {
      state.wheatherForecast.data = action.payload;
      state.wheatherForecast.status = typeStatus.SUCCESS;
    },
    errWheatherForecast: (state) => {
      state.wheatherForecast.status = typeStatus.FAILURE;
    },
  },
});

export const {
  wheatherCity,
  getWheatherForecast,
  loadWeatherCity,
  errWeatherCity,
  errWheatherForecast,
  loadWeatherForecast,
} = weatherSlice.actions;

export default weatherSlice.reducer;
