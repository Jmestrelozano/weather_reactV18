import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ForecastList } from "../../components/organisms/forecast-list/ForecastList";
import { PopularCities } from "../../components/organisms/popular-cities/PopularCities";
import { SearchBar } from "../../components/organisms/search-bar/SearchBar";
import { TimeAndLocation } from "../../components/organisms/time-and-location/TimeAndLocation";
import { WeatherDetails } from "../../components/organisms/weather-details/WeatherDetails";
import { WeatherHomeTemplate } from "../../components/templates/weather-home-template/WeatherHomeTemplate";
import { typeStatus } from "../../global/status";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useDebounce } from "../../hooks/useDebounce";
import { getAllCitys } from "../../services/country-services/getAllCitys.service";
import { getPopularCitys } from "../../services/country-services/getPopularCitys.service";
import { getWeatherByCity } from "../../services/weather-services/getWeatherByCity.service";
import { getWeatherByLocation } from "../../services/weather-services/getWeatherByLocation.service";
import { citiesByAcronym, setStatusCityByName } from "../../store/slices/countrySlices";
import { alertError } from "../../utils/alertError";
import { locationUser } from "../../utils/locationUser";

function WeatherHomePage() {
  const dispatch = useAppDispatch();
  const {
    allCitys: { data: dataCitys },
    statusCityByName,
  } = useAppSelector((store) => store.country);
  const { status } = useAppSelector((store) => store.weather.wheatherCity);
  const {
    data: { hourly, daily },
  } = useAppSelector((store) => store.weather.wheatherForecast);

  const { coords } = locationUser();
  const { lat, long, isError } = coords;

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
    if (name !== "") {
      dispatch(citiesByAcronym({ name, data: dataCitys }));
    }
  }, [debounceValue]);

  const weatherContent =
    status === typeStatus.SUCCESS ? (
      <>
        <TimeAndLocation />
        <WeatherDetails />
        <ForecastList items={hourly} title="hourly forecast" />
        <ForecastList items={daily} title="daily forecast" />
      </>
    ) : null;

  return (
    <WeatherHomeTemplate
      header={<PopularCities tabClick={setTabCountry} />}
      search={
        <SearchBar
          location={() => {
            if (!isError) {
              dispatch(getWeatherByLocation(lat, long));
            } else {
              alertError("Active la ubicacion, para poder acceder a su ubicacion");
            }
          }}
          countryName={countryName}
          setCountryName={setCountryName}
        />
      }
      weatherContent={weatherContent}
      footer={<ToastContainer />}
    />
  );
}

export default WeatherHomePage;
