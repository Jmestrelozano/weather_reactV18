import { ILocalTime, IWeatherForecast } from "../../interfaces/weather-forecast.interface";
import {
  errWheatherForecast,
  getWheatherForecast,
  loadWeatherForecast,
} from "../../store/weather/slice/weather.slice";
import { AppDispatch } from "../../store/store";
import { formatToLocalTime } from "../../utils/formatToLocalTime";
import { fetchWeatherApi } from "./weather-api.client";

const mapDailyForecast = (
  daily: IWeatherForecast["daily"],
  timezone: string,
): ILocalTime[] =>
  daily.slice(1, 6).map((day) => ({
    title: formatToLocalTime(day.dt, timezone, "ccc"),
    temp: day.temp.day,
    icon: day.weather[0]?.icon ?? "01d",
  }));

const mapHourlyForecast = (
  hourly: IWeatherForecast["hourly"],
  timezone: string,
): ILocalTime[] =>
  hourly.slice(1, 6).map((hour) => ({
    title: formatToLocalTime(hour.dt, timezone, "hh:mm a"),
    temp: hour.temp,
    icon: hour.weather[0]?.icon ?? "01d",
  }));

export const getWeatherForecast =
  (lat: number, lon: number) => async (dispatch: AppDispatch) => {
    dispatch(loadWeatherForecast());

    try {
      const result = await fetchWeatherApi<IWeatherForecast>(
        `/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts`,
      );

      dispatch(
        getWheatherForecast({
          timeZone: result.timezone,
          daily: mapDailyForecast(result.daily, result.timezone),
          hourly: mapHourlyForecast(result.hourly, result.timezone),
        }),
      );
    } catch (error: unknown) {
      dispatch(errWheatherForecast());
      throw error;
    }
  };
