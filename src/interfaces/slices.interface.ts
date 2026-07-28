import { IPopularCitys } from "./popular-citys.interface";
import { IWeatherByCity } from "./weather-by-city.interface";
import { ILocalTime } from "./weather-forecast.interface";

export interface ICountrySlice {
  popularCitys: {
    data: IPopularCitys[];
    status: string;
    err: {
      msg: string;
    };
  };
  allCitys: {
    data: { sigla: string; data: ICityWorld[] }[];
    status: string;
    err: {
      msg: string;
    };
  };
  cityByName: {
    data: ICityWorld[];
  };
  statusCityByName: string;
}

export interface IWeatherSlice {
  wheatherCity: {
    data: IWeatherByCity[];
    status: string;
    err: {
      msg: string;
    };
  };
  wheatherForecast: {
    data: ITimeZone;
    status: string;
  };
}

export interface ITimeZone {
  timeZone: string;
  daily: ILocalTime[];
  hourly: ILocalTime[];
}

export interface ICityWorld {
  city: string;
}
