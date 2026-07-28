import { typeStatus } from "../../../global/status";
import { ICountrySlice } from "../../../interfaces/slices.interface";

export const countryInitialState: ICountrySlice = {
  popularCitys: {
    data: [],
    status: typeStatus.NONE,
    err: {
      msg: "",
    },
  },
  allCitys: {
    data: [],
    status: typeStatus.NONE,
    err: {
      msg: "",
    },
  },
  cityByName: {
    data: [],
  },
  statusCityByName: typeStatus.NONE,
};
