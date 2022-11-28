import { Dispatch } from "@reduxjs/toolkit";
import { allCitys } from "../../Store/Slices/countrySlices";
import ciudades from "../Data/ciudades.json";

export const getAllCitys = () => async (dispatch: Dispatch) => {
  try {
    const result: any = ciudades;

    const newResult = result.map((ciudades: any) => {
      return { city: ciudades.city };
    });

    dispatch(allCitys(newResult));

    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
