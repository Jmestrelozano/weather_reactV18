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
import { searchCityByName } from "../../store/country/actions/search-city-by-name.action";
import { setStatusCityByName } from "../../store/country/slice/country.slice";
import { alertError } from "../../utils/alertError";
import { locationUser } from "../../utils/locationUser";

function WeatherHomePage() {
  const dispatch = useAppDispatch();
  const { statusCityByName } = useAppSelector((store) => store.country);
  const { status } = useAppSelector((store) => store.weather.wheatherCity);
  const {
    data: { hourly, daily },
  } = useAppSelector((store) => store.weather.wheatherForecast);

  const { coords } = locationUser();
  const { lat, long, isError } = coords;

  const [countryName, setCountryName] = useState<{ name: string }>({ name: "" });
  const [tabCountry, setTabCountry] = useState("");

  const { name } = countryName;
  const debounceValue = useDebounce(name, 500);

  useEffect(() => {
    dispatch(getAllCitys());
    dispatch(getPopularCitys());
  }, [dispatch]);

  useEffect(() => {
    if (statusCityByName === typeStatus.SUCCESS && name !== "") {
      dispatch(getWeatherByCity(name));
      return;
    }

    if (statusCityByName === typeStatus.FAILURE) {
      dispatch(setStatusCityByName(typeStatus.NONE));
    }
  }, [statusCityByName, dispatch, name]);

  useEffect(() => {
    if (tabCountry === "") {
      return;
    }

    dispatch(getWeatherByCity(tabCountry));
    setCountryName({ name: "" });
  }, [tabCountry, dispatch]);

  useEffect(() => {
    if (debounceValue === "") {
      return;
    }

    dispatch(searchCityByName(debounceValue));
  }, [debounceValue, dispatch]);

  const handleLocation = () => {
    if (isError) {
      alertError("Active la ubicacion, para poder acceder a su ubicacion");
      return;
    }

    dispatch(getWeatherByLocation(lat, long));
  };

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
          location={handleLocation}
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
