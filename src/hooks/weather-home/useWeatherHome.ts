import { typeStatus } from "../../global/status";
import { useAppSelector } from "../redux";
import { useCitySearch } from "./useCitySearch";
import { useLoadHomeCities } from "./useLoadHomeCities";
import { usePopularCityTab } from "./usePopularCityTab";
import { useUserLocationWeather } from "./useUserLocationWeather";

export const useWeatherHome = () => {
  useLoadHomeCities();

  const { countryName, setCountryName, onSearch } = useCitySearch();
  const { onPopularCitySelect } = usePopularCityTab(setCountryName);
  const { onLocationClick } = useUserLocationWeather();

  const { status } = useAppSelector((store) => store.weather.wheatherCity);
  const isWeatherReady = status === typeStatus.SUCCESS;

  return {
    countryName,
    setCountryName,
    onSearch,
    onPopularCitySelect,
    onLocationClick,
    isWeatherReady,
  };
};
