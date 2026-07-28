import { DateTime } from "luxon";
import { ILocalTime } from "../../interfaces/weather-forecast.interface";
import {
  errWheatherForecast,
  getWheatherForecast,
  loadWeatherForecast,
} from "../../store/weather/slice/weather.slice";
import { AppDispatch } from "../../store/store";
import { formatToLocalTime } from "../../utils/formatToLocalTime";
import { fetchWeatherApi } from "./weather-api.client";

interface ForecastListResponse {
  city: {
    timezone: number;
  };
  list: Array<{
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{ icon: string }>;
  }>;
}

const timezoneFromOffset = (offsetSeconds: number): string => {
  const hours = offsetSeconds / 3600;
  const sign = hours >= 0 ? "+" : "-";
  const absolute = Math.abs(hours);
  const hh = Math.floor(absolute).toString().padStart(2, "0");
  const mm = Math.round((absolute % 1) * 60)
    .toString()
    .padStart(2, "0");
  return `UTC${sign}${hh}:${mm}`;
};

const mapForecastList = (result: ForecastListResponse) => {
  const timeZone = timezoneFromOffset(result.city.timezone);
  const hourly: ILocalTime[] = result.list.slice(0, 8).map((item) => ({
    title: formatToLocalTime(item.dt, timeZone, "h a"),
    temp: item.main.temp,
    icon: item.weather[0]?.icon ?? "01d",
  }));

  const byDay = new Map<string, ILocalTime>();
  result.list.forEach((item) => {
    const dayKey = DateTime.fromSeconds(item.dt).setZone(timeZone).toFormat("yyyy-LL-dd");
    const existing = byDay.get(dayKey);
    if (!existing) {
      byDay.set(dayKey, {
        title: formatToLocalTime(item.dt, timeZone, "ccc"),
        temp: item.main.temp,
        tempMin: item.main.temp_min,
        tempMax: item.main.temp_max,
        icon: item.weather[0]?.icon ?? "01d",
      });
      return;
    }

    byDay.set(dayKey, {
      ...existing,
      tempMin: Math.min(existing.tempMin ?? existing.temp, item.main.temp_min),
      tempMax: Math.max(existing.tempMax ?? existing.temp, item.main.temp_max),
    });
  });

  return {
    timeZone,
    hourly,
    daily: Array.from(byDay.values()).slice(0, 7),
  };
};

export const getWeatherForecast =
  (lat: number, lon: number) => async (dispatch: AppDispatch) => {
    dispatch(loadWeatherForecast());

    try {
      const result = await fetchWeatherApi<ForecastListResponse>(
        `/forecast?lat=${lat}&lon=${lon}`,
      );
      dispatch(getWheatherForecast(mapForecastList(result)));
    } catch (error: unknown) {
      dispatch(errWheatherForecast());
      throw error;
    }
  };
