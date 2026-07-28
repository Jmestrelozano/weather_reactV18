import dataPopularCitys from "../../data/cities/popular-cities.json";
import { popularCitys } from "../../store/country/slice/country.slice";
import { AppDispatch } from "../../store/store";

export const getPopularCitys = () => (dispatch: AppDispatch) => {
  dispatch(popularCitys(dataPopularCitys));
};
