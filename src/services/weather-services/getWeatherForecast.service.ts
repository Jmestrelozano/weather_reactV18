import {
  errWheatherForecast,
  getWheatherForecast,
  loadWeatherForecast,
} from "../../store/weather/slice/weather.slice";
import { AppDispatch } from "../../store/store";
import {
  IForecastListResponse,
  mapForecastList,
} from "../../mappers/weather/map-forecast-list.mapper";
import { fetchWeatherApi } from "./weather-api.client";

export const getWeatherForecast =
  (lat: number, lon: number) => async (dispatch: AppDispatch) => {
    dispatch(loadWeatherForecast());

    const result = await fetchWeatherApi<IForecastListResponse>(
      `/forecast?lat=${lat}&lon=${lon}`,
    ).catch(() => {
      dispatch(errWheatherForecast());
      return null;
    });

    if (!result) return;

    dispatch(getWheatherForecast(mapForecastList(result)));
  };
