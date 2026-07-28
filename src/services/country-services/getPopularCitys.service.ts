import { popularCitys } from "../../store/slices/countrySlices";
import { AppDispatch } from "../../store/store";
import dataPopularCitys from "../../data/cities/popular-cities.json";

export const getPopularCitys = async (dispatch: AppDispatch) => {
  try {
    const result = dataPopularCitys;
    dispatch(popularCitys(result));
  } catch (error) {
    console.log(error);
  }
};
