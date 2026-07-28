import { typeStatus } from "../../../global/status";
import { getWeatherByCity } from "../../../services/weather-services/getWeatherByCity.service";
import { AppDispatch, RootState } from "../../store";
import { setStatusCityByName } from "../slice/country.slice";
import { searchCityByName } from "./search-city-by-name.action";

export const searchAndLoadWeather =
  (name: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(searchCityByName(name));

    const { statusCityByName } = getState().country;

    if (statusCityByName === typeStatus.SUCCESS) {
      void dispatch(getWeatherByCity(name));
      return;
    }

    if (statusCityByName === typeStatus.FAILURE) {
      dispatch(setStatusCityByName(typeStatus.NONE));
    }
  };
