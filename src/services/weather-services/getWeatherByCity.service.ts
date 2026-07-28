import { IWeatherByCity } from "../../interfaces/weather-by-city.interface";
import {
  errWeatherCity,
  loadWeatherCity,
  wheatherCity,
} from "../../store/weather/slice/weather.slice";
import { AppDispatch } from "../../store/store";
import { fetchWeatherApi } from "./weather-api.client";
import { getWeatherForecast } from "./getWeatherForecast.service";

const DEFAULT_CITY = "Cartagena";

export const getWeatherByCity = (city: string) => async (dispatch: AppDispatch) => {
  dispatch(loadWeatherCity());

  try {
    const query = city.trim() || DEFAULT_CITY;
    const result = await fetchWeatherApi<IWeatherByCity>(`/weather?q=${query}`);

    dispatch(wheatherCity(result));
    await dispatch(getWeatherForecast(result.coord.lat, result.coord.lon));
  } catch (error: unknown) {
    dispatch(errWeatherCity());
    throw error;
  }
};
