import { Dispatch, SetStateAction } from "react";
import { getWeatherByCity } from "../../services/weather-services/getWeatherByCity.service";
import { useAppDispatch } from "../redux";
import { CountryNameState } from "./useCitySearch";

export const usePopularCityTab = (
  setCountryName: Dispatch<SetStateAction<CountryNameState>>,
) => {
  const dispatch = useAppDispatch();

  const onPopularCitySelect = (city: string) => {
    void dispatch(getWeatherByCity(city));
    setCountryName({ name: "" });
  };

  return { onPopularCitySelect };
};
