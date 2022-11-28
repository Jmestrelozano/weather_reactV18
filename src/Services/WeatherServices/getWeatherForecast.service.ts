import { Dispatch } from "@reduxjs/toolkit";
import { ApiKEY, BaseURL } from "../../Global/globales";
import { ILocalTime, IWeatherForecast } from "../../Interfaces/interfaceWeatherForecast";
import {
  errWheatherForecast,
  getWheatherForecast,
  loadWeatherForecast,
} from "../../Store/Slices/weatherSlices";
import { formatToLocalTime } from "../../Utils/formatToLocalTime";

export const getWeatherForecast = async (lat: number, lon: number, dispatch: Dispatch) => {
  dispatch(loadWeatherForecast());
  try {
    const resp = await fetch(
      BaseURL +
        `/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&units=metric` +
        `&appid=${ApiKEY}`
    );

    if (resp.status === 200) {
      const result: IWeatherForecast = await resp.json();
      const { timezone, daily, hourly } = result;

      let dailyW: ILocalTime[] = [];
      let hourlyW: ILocalTime[] = [];

      dailyW = daily.slice(1, 6).map((d) => {
        return {
          title: formatToLocalTime(d.dt, timezone, "ccc"),
          temp: d.temp.day,
          icon: d.weather[0].icon,
        };
      });

      hourlyW = hourly.slice(1, 6).map((h) => {
        return {
          title: formatToLocalTime(h.dt, timezone, "hh:mm a"),
          temp: h.temp,
          icon: h.weather[0].icon,
        };
      });

      const data = {
        timeZone: timezone,
        daily: dailyW,
        hourly: hourlyW,
      };

      dispatch(getWheatherForecast(data));
    } else {
      console.log("Hubo un error en la conexion");
    }
  } catch (error) {
    dispatch(errWheatherForecast());
    throw error;
  }
};
