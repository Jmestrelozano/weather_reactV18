import { AppDispatch } from "../../Store/store";
import { allCitys } from "../../Store/Slices/countrySlices";
import { ICityWorld } from "../../Interfaces/interfaceSlices";
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
