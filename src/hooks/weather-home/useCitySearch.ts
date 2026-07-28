import { useState } from "react";
import { searchAndLoadWeather } from "../../store/country/actions/search-and-load-weather.action";
import { useAppDispatch } from "../redux";

export type CountryNameState = { name: string };

export const useCitySearch = () => {
  const dispatch = useAppDispatch();
  const [countryName, setCountryName] = useState<CountryNameState>({ name: "" });

  const onSearch = () => {
    const query = countryName.name.trim();
    if (!query) {
      return;
    }
    dispatch(searchAndLoadWeather(query));
  };

  return {
    countryName,
    setCountryName,
    onSearch,
  };
};
