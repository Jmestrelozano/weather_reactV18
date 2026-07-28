import { popularCitys } from "../../Store/Slices/countrySlices";
import { AppDispatch } from "../../Store/store";
import dataPopularCitys from "../Data/popularCitys.json";

export const getPopularCitys = async (dispatch: AppDispatch) => {
  try {
    const result = dataPopularCitys;
    dispatch(popularCitys(result));
  } catch (error) {
    console.log(error);
  }
};
