import { useAppSelector } from "../../../hooks/redux";
import { ForecastList } from "../forecast-list/ForecastList";
import { TimeAndLocation } from "../time-and-location/TimeAndLocation";
import { WeatherDetails } from "../weather-details/WeatherDetails";

export const WeatherContent = () => {
  const {
    data: { hourly, daily },
  } = useAppSelector((store) => store.weather.wheatherForecast);

  return (
    <>
      <TimeAndLocation />
      <WeatherDetails />
      <ForecastList items={hourly} title="hourly forecast" />
      <ForecastList items={daily} title="daily forecast" />
    </>
  );
};
