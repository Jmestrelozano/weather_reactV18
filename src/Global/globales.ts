import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/store";

export const ApiKEY = "023ce3a267e929bf574689ae91564660";
export const BaseURL = "https://api.openweathermap.org/data/2.5";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export enum typeStatus {
  NONE = "NONE",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}
