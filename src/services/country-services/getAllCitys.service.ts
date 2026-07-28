import ciudades from "../../data/cities/ciudades.json";
import { ICityWorld } from "../../interfaces/slices.interface";
import { allCitys } from "../../store/country/slice/country.slice";
import { AppDispatch } from "../../store/store";

type CityJsonEntry = {
  city: string;
};

const toCityWorld = ({ city }: CityJsonEntry): ICityWorld => ({ city });

export const getAllCitys = () => (dispatch: AppDispatch) => {
  const cities = (ciudades as CityJsonEntry[]).map(toCityWorld);
  dispatch(allCitys(cities));
};
