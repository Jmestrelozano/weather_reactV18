import { IWeatherByCity } from "../../interfaces/weather-by-city.interface";
import {
  errWeatherCity,
  loadWeatherCity,
  wheatherCity,
} from "../../store/weather/slice/weather.slice";
import { AppDispatch } from "../../store/store";
import { fetchWeatherApi } from "./weather-api.client";
import { getWeatherForecast } from "./getWeatherForecast.service";

export const getWeatherByLocation =
  (lat: number, lon: number) => async (dispatch: AppDispatch) => {
    dispatch(loadWeatherCity());

    const result = await fetchWeatherApi<IWeatherByCity>(
      `/weather?lat=${lat}&lon=${lon}`,
    ).catch(() => {
      dispatch(errWeatherCity());
      return null;
    });

    if (!result) return;

    dispatch(wheatherCity(result));
    void dispatch(getWeatherForecast(result.coord.lat, result.coord.lon));
  };
