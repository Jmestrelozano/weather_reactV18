import { ToastContainer } from "react-toastify";
import { UnitToggle } from "../../components/molecules/unit-toggle/UnitToggle";
import { AppHeader } from "../../components/organisms/app-header/AppHeader";
import { SearchBar } from "../../components/organisms/search-bar/SearchBar";
import { WeatherContent } from "../../components/organisms/weather-content/WeatherContent";
import { WeatherHomeTemplate } from "../../components/templates/weather-home-template/WeatherHomeTemplate";
import { useWeatherHome } from "../../hooks/weather-home/useWeatherHome";

function WeatherHomePage() {
  const { countryName, setCountryName, onLocationClick, onSearch, isWeatherReady } =
    useWeatherHome();

  const weatherContent = isWeatherReady ? <WeatherContent /> : null;

  return (
    <WeatherHomeTemplate
      header={<AppHeader unitsControl={<UnitToggle />} />}
      search={
        <SearchBar
          location={onLocationClick}
          countryName={countryName}
          setCountryName={setCountryName}
          onSearch={onSearch}
        />
      }
      weatherContent={weatherContent}
      footer={<ToastContainer theme="dark" />}
    />
  );
}

export default WeatherHomePage;
