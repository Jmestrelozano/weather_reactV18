import { alertError } from "../../../utils/alertError";
import { AppDispatch, RootState } from "../../store";
import { findCityByExactName } from "../helpers/cities.helpers";
import {
  setCityByNameFailure,
  setCityByNameSuccess,
} from "../slice/country.slice";

export const searchCityByName =
  (name: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const groups = getState().country.allCitys.data;
    const match = findCityByExactName(name, groups);

    if (!match) {
      dispatch(setCityByNameFailure());
      alertError("No hay ninguna coincidencia");
      return;
    }

    dispatch(setCityByNameSuccess([match]));
  };
