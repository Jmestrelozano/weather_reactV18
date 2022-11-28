import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { TobButton } from "../../Components/Buttons/TobButton";
import { BackgroundImage } from "../../Components/ContentsBackground/BackgroundImage";
import { Forecast } from "../../Components/Forecast";
import { InputSearch } from "../../Components/Inputs/InputSearch";
import { TemperatureAndDetails } from "../../Components/TemperatureAndDetails";
import { TimeAndLocation } from "../../Components/TimeAndLocation";
import { typeStatus, useAppDispatch, useAppSelector } from "../../Global/globales";
import { useDebounce } from "../../Hooks/useDebounce";
import { getAllCitys } from "../../Services/CountryServices/getAllCitys.service";
import { getPopularCitys } from "../../Services/CountryServices/getPopularCitys.service";
import { getWeatherByCity } from "../../Services/WeatherServices/getWeatherByCity.service";
import { getWeatherByLocation } from "../../Services/WeatherServices/getWeatherByLocation.service";
import { citiesByAcronym, setStatusCityByName } from "../../Store/Slices/countrySlices";
import { storeInterface } from "../../Store/store";
import { alertError } from "../../Utils/alertError";
import { locationUser } from "../../Utils/locationUser";

function WeatherHomePage() {
  const dispatch = useAppDispatch();
  const {
    allCitys: { data: dataCitys },
    statusCityByName,
  } = useAppSelector((store: storeInterface) => store.country);
  const { status } = useAppSelector((store: storeInterface) => store.weather.wheatherCity);
  const {
    data: { hourly, daily },
  } = useAppSelector((store: storeInterface) => store.weather.wheatherForecast);

  const { coords, onUbicacionConcedida, onErrorDeUbicacion } = locationUser({
    lat: 0,
    long: 0,
    isError: true,
  });

  const [countryName, setCountryName] = useState<{ name: string }>({
    name: "",
  });
  const [tabCountry, setTabCountry] = useState<string>("");

  const { name } = countryName;
  const debounceValue = useDebounce(name, 500);

  useEffect(() => {
    dispatch(getAllCitys());
    dispatch(getPopularCitys);
  }, []);

  const onchangeSearchCity = () => {
    if (statusCityByName === typeStatus.SUCCESS) {
      if (name !== "") {
        dispatch(getWeatherByCity(name));
      }
    } else if (statusCityByName === typeStatus.FAILURE) {
      dispatch(setStatusCityByName(typeStatus.NONE));
    }
  };

  useEffect(() => {
    onchangeSearchCity();
  }, [statusCityByName]);

  const handleClickPopularCity = () => {
    if (tabCountry !== "") {
      dispatch(getWeatherByCity(tabCountry));
      setCountryName({ ...countryName, name: "" });
    }
  };
  useEffect(() => {
    handleClickPopularCity();
  }, [tabCountry]);

  useEffect(() => {
    name !== "" && dispatch(citiesByAcronym({ name, data: dataCitys }));
  }, [debounceValue]);

  return (
    <BackgroundImage>
      <TobButton tabClick={setTabCountry} />
      <InputSearch
        coords={coords}
        location={() => {
          navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion);
        }}
        countryName={countryName}
        setCountryName={setCountryName}
      />
      {status === typeStatus.SUCCESS ? (
        <>
          <TimeAndLocation />
          <TemperatureAndDetails />

          <Forecast items={hourly} title="hourly forecast" />
          <Forecast items={daily} title="daily forecast" />
        </>
      ) : (
        <div className="flex justify-center items-center h-28 text-white font-semibold text-2xl">
          <p>Sin busqueda</p>
        </div>
      )}
      <ToastContainer />
    </BackgroundImage>
  );
}

export default WeatherHomePage;
