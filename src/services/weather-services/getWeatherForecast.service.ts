import { ApiKEY, BaseURL } from "../../global/weatherApi";
import { ILocalTime, IWeatherForecast } from "../../interfaces/weather-forecast.interface";
import {
  errWheatherForecast,
  getWheatherForecast,
  loadWeatherForecast,
} from "../../store/slices/weatherSlices";
import { AppDispatch } from "../../store/store";
import { formatToLocalTime } from "../../utils/formatToLocalTime";

export const getWeatherForecast = async (lat: number, lon: number, dispatch: AppDispatch) => {
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
        const icon = d.weather[0]?.icon ?? "01d";
        return {
          title: formatToLocalTime(d.dt, timezone, "ccc"),
          temp: d.temp.day,
          icon,
        };
      });

      hourlyW = hourly.slice(1, 6).map((h) => {
        const icon = h.weather[0]?.icon ?? "01d";
        return {
          title: formatToLocalTime(h.dt, timezone, "hh:mm a"),
          temp: h.temp,
          icon,
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
