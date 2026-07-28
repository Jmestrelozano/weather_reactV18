import { ToastContainer } from "react-toastify";
import { PopularCities } from "../../components/organisms/popular-cities/PopularCities";
import { SearchBar } from "../../components/organisms/search-bar/SearchBar";
import { WeatherContent } from "../../components/organisms/weather-content/WeatherContent";
import { WeatherHomeTemplate } from "../../components/templates/weather-home-template/WeatherHomeTemplate";
import { useWeatherHome } from "../../hooks/weather-home/useWeatherHome";

function WeatherHomePage() {
  const {
    countryName,
    setCountryName,
    onPopularCitySelect,
    onLocationClick,
    isWeatherReady,
  } = useWeatherHome();

  const weatherContent = isWeatherReady ? <WeatherContent /> : null;

  return (
    <WeatherHomeTemplate
      header={<PopularCities tabClick={onPopularCitySelect} />}
      search={
        <SearchBar
          location={onLocationClick}
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
