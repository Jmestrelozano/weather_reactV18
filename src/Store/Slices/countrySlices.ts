import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeStatus } from "../../Global/globales";
import { IPopularCitys } from "../../Interfaces/interfacePopularCitys";
import { ICityWorld, ICountrySlice } from "../../Interfaces/interfaceSlices";
import { alertError } from "../../Utils/alertError";

const initialState: ICountrySlice = {
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

export const countrySlices = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    popularCitys: ({ popularCitys }, action: PayloadAction<IPopularCitys[]>) => {
      popularCitys.data = action.payload;
      popularCitys.status = typeStatus.SUCCESS;
    },
    allCitys: ({ allCitys }, action: PayloadAction<ICityWorld[]>) => {
      const data = action.payload;
      const newCitys: { sigla: string; data: any }[] = [];
      const citys = data.map((cityWorld) => {
        return {
          sigla: cityWorld.city.charAt(0),
          data: cityWorld,
        };
      });

      citys.forEach((city) => {
        const { sigla, data } = city;
        const findArrCity = newCitys.find((newCity) => city.sigla == newCity.sigla);

        if (findArrCity) {
          findArrCity.data.push(data);
        } else {
          newCitys.push({
            sigla,
            data: [data],
          });
        }
      });
      allCitys.data = newCitys;
      allCitys.status = typeStatus.SUCCESS;
    },
    citiesByAcronym: (
      state,
      action: PayloadAction<{ name: string; data: { sigla: string; data: ICityWorld[] }[] }>
    ) => {
      const name = action.payload.name;
      const data = action.payload.data;

      if (data.length > 0) {
        let citysFilter: ICityWorld[] = [];
        data.filter(({ sigla, data }) => {
          if (name.toUpperCase().charAt(0) === sigla) {
            citysFilter = data;
          }
        });

        const city = citysFilter.filter(({ city }) => city.toLowerCase() === name.toLowerCase());

        if (city.length > 0) {
          state.cityByName.data = city;
          state.statusCityByName = typeStatus.SUCCESS;
        } else {
          state.cityByName.data = [];
          state.statusCityByName = typeStatus.FAILURE;
          alertError("No hay ninguna coincidencia");
        }
      } else {
        state.cityByName.data = [];
        state.statusCityByName = typeStatus.FAILURE;
        alertError("No hay ninguna coincidencia");
      }
    },
    setStatusCityByName: (state, action: PayloadAction<string>) => {
      state.statusCityByName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { popularCitys, allCitys, citiesByAcronym, setStatusCityByName } =
  countrySlices.actions;

export default countrySlices.reducer;
