import { getAllCitys } from "../../../services/country-services/getAllCitys.service";
import { getPopularCitys } from "../../../services/country-services/getPopularCitys.service";
import { AppDispatch } from "../../store";

export const loadHomeCities = () => (dispatch: AppDispatch) => {
  dispatch(getAllCitys());
  dispatch(getPopularCitys());
};
