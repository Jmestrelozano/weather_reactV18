import { useEffect, useState } from "react";
import { searchAndLoadWeather } from "../../store/country/actions/search-and-load-weather.action";
import { useAppDispatch } from "../redux";
import { useDebounce } from "../useDebounce";

export type CountryNameState = { name: string };

export const useCitySearch = () => {
  const dispatch = useAppDispatch();
  const [countryName, setCountryName] = useState<CountryNameState>({ name: "" });
  const debounceValue = useDebounce(countryName.name, 500);

  useEffect(() => {
    if (debounceValue === "") {
      return;
    }

    dispatch(searchAndLoadWeather(debounceValue));
  }, [debounceValue, dispatch]);

  return {
    countryName,
    setCountryName,
  };
};
