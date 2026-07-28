import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeStatus } from "../../../global/status";
import { IPopularCitys } from "../../../interfaces/popular-citys.interface";
import { ICityWorld } from "../../../interfaces/slices.interface";
import { groupCitiesByInitial } from "../helpers/cities.helpers";
import { countryInitialState } from "./country.initial-state";

export const countrySlice = createSlice({
  name: "country",
  initialState: countryInitialState,
  reducers: {
    popularCitys: (state, action: PayloadAction<IPopularCitys[]>) => {
      state.popularCitys.data = action.payload;
      state.popularCitys.status = typeStatus.SUCCESS;
    },
    allCitys: (state, action: PayloadAction<ICityWorld[]>) => {
      state.allCitys.data = groupCitiesByInitial(action.payload);
      state.allCitys.status = typeStatus.SUCCESS;
    },
    setCityByNameSuccess: (state, action: PayloadAction<ICityWorld[]>) => {
      state.cityByName.data = action.payload;
      state.statusCityByName = typeStatus.SUCCESS;
    },
    setCityByNameFailure: (state) => {
      state.cityByName.data = [];
      state.statusCityByName = typeStatus.FAILURE;
    },
    setStatusCityByName: (state, action: PayloadAction<typeStatus>) => {
      state.statusCityByName = action.payload;
    },
  },
});

export const {
  popularCitys,
  allCitys,
  setCityByNameSuccess,
  setCityByNameFailure,
  setStatusCityByName,
} = countrySlice.actions;

export default countrySlice.reducer;
