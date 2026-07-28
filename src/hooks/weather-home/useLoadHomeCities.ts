import { useEffect } from "react";
import { loadHomeCities } from "../../store/country/actions/load-home-cities.action";
import { useAppDispatch } from "../redux";

export const useLoadHomeCities = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadHomeCities());
  }, [dispatch]);
};
