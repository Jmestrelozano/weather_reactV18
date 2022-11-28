import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeStatus } from "../../Global/globales";
import { ITimeZone, IWeatherSlice } from "../../Interfaces/interfaceSlices";
import { IWeatherByCity } from "../../Interfaces/interfaceWeatherByCIty";
import { alertSuccess } from "../../Utils/alertSuccess";

const initialState: IWeatherSlice = {
  wheatherCity: {
    data: [],
    status: typeStatus.NONE,
    err: {
      msg: "",
    },
  },
  wheatherForecast: {
    data: {
      timeZone: "",
      daily: [],
      hourly: [],
    },
    status: typeStatus.NONE,
  },
};

export const weatherSlices = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    loadWeatherCity: (state) => {
      state.wheatherCity.status = typeStatus.LOADING;
    },
    wheatherCity: ({ wheatherCity }, action: PayloadAction<IWeatherByCity>) => {
      const arrWheaterCity = [];
      arrWheaterCity.push(action.payload);
      wheatherCity.data = arrWheaterCity;
      wheatherCity.status = typeStatus.SUCCESS;
      alertSuccess();
    },
    errWeatherCity: (state) => {
      state.wheatherCity.data = [];
      state.wheatherCity.status = typeStatus.FAILURE;
    },
    loadWeatherForecast: (state) => {
      state.wheatherForecast.status = typeStatus.LOADING;
    },
    getWheatherForecast: ({ wheatherForecast }, action: PayloadAction<ITimeZone>) => {
      wheatherForecast.data = action.payload;
      wheatherForecast.status = typeStatus.SUCCESS;
    },
    errWheatherForecast: (state) => {
      state.wheatherForecast.status = typeStatus.FAILURE;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  wheatherCity,
  getWheatherForecast,
  loadWeatherCity,
  errWeatherCity,
  errWheatherForecast,
  loadWeatherForecast,
} = weatherSlices.actions;

export default weatherSlices.reducer;
