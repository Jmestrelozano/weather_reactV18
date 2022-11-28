import { Dispatch } from "@reduxjs/toolkit";
import { popularCitys } from "../../Store/Slices/countrySlices";
import dataPopularCitys from "../Data/popularCitys.json";

export const getPopularCitys = async (dispatch: Dispatch) => {
  try {
    const result = dataPopularCitys;
    dispatch(popularCitys(result));
  } catch (error) {
    console.log(error);
  }
};
