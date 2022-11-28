import { IPopularCitys } from "./interfacePopularCitys";
import { IWeatherByCity } from "./interfaceWeatherByCIty";
import { ILocalTime, IWeatherForecast } from "./interfaceWeatherForecast";

export interface ICountrySlice {
  popularCitys: {
    data: IPopularCitys[];
    status: string;
    err: {
      msg: string;
    };
  };
  allCitys: {
    data: { sigla: string; data: any }[];
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
