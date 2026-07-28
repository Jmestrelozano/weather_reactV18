import { getWeatherByLocation } from "../../services/weather-services/getWeatherByLocation.service";
import { alertError } from "../../utils/alertError";
import { locationUser } from "../../utils/locationUser";
import { useAppDispatch } from "../redux";

export const useUserLocationWeather = () => {
  const dispatch = useAppDispatch();
  const { coords } = locationUser();
  const { lat, long, isError } = coords;

  const onLocationClick = () => {
    if (isError) {
      alertError("Active la ubicacion, para poder acceder a su ubicacion");
      return;
    }

    void dispatch(getWeatherByLocation(lat, long));
  };

  return { onLocationClick };
};
