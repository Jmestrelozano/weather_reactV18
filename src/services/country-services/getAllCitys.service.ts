import { AppDispatch } from "../../store/store";
import { allCitys } from "../../store/slices/countrySlices";
import { ICityWorld } from "../../interfaces/interfaceSlices";
import ciudades from "../Data/ciudades.json";

type CityJsonEntry = {
  city: string;
};

export const getAllCitys = () => async (dispatch: AppDispatch) => {
  try {
    const result = ciudades as CityJsonEntry[];

    const newResult: ICityWorld[] = result.map(({ city }) => ({ city }));

    dispatch(allCitys(newResult));

    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
