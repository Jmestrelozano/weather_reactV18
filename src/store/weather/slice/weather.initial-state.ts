import { typeStatus } from "../../../global/status";
import { IWeatherSlice } from "../../../interfaces/slices.interface";

export const weatherInitialState: IWeatherSlice = {
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
