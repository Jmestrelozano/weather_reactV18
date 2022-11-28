import { Dispatch } from "@reduxjs/toolkit";
import { ApiKEY, BaseURL } from "../../Global/globales";
import { IWeatherByCity } from "../../Interfaces/interfaceWeatherByCIty";
import { errWeatherCity, loadWeatherCity, wheatherCity } from "../../Store/Slices/weatherSlices";
import { getWeatherForecast } from "./getWeatherForecast.service";

export const getWeatherByCity = (city: string) => async (dispatch: Dispatch) => {
  dispatch(loadWeatherCity());
  try {
    city = city !== "" ? city : "Cartagena";
    const resp = await fetch(BaseURL + `/weather?q=${city}` + `&appid=${ApiKEY}&units=metric`);

    if (resp.status === 200) {
      const result: IWeatherByCity = await resp.json();
      const {
        coord: { lat, lon },
      } = result;
      getWeatherForecast(lat, lon, dispatch);
      dispatch(wheatherCity(result));
    } else {
      console.log("Hubo un error en la conexion");
    }
  } catch (error) {
    dispatch(errWeatherCity());
    throw error;
  }
};
