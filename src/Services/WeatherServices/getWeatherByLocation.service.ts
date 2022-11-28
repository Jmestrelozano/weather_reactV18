import { Dispatch } from "@reduxjs/toolkit";
import { ApiKEY, BaseURL } from "../../Global/globales";
import { IWeatherByCity } from "../../Interfaces/interfaceWeatherByCIty";
import { wheatherCity } from "../../Store/Slices/weatherSlices";
import { getWeatherForecast } from "./getWeatherForecast.service";

export const getWeatherByLocation = (lat: number, long: number) => async (dispatch: Dispatch) => {
  try {
    const resp = await fetch(
      BaseURL + `/weather?lat=${lat}&lon=${long}` + `&appid=${ApiKEY}&units=metric`
    );

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
    console.log(error);
    throw error;
  }
};
