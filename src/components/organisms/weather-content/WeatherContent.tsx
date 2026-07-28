import { useAppSelector } from "../../../hooks/redux";
import { formatToLocalTime } from "../../../utils/formatToLocalTime";
import { ForecastList } from "../forecast-list/ForecastList";
import { TimeAndLocation } from "../time-and-location/TimeAndLocation";
import { WeatherDetails } from "../weather-details/WeatherDetails";

export const WeatherContent = () => {
  const {
    data: { hourly, daily, timeZone },
  } = useAppSelector((store) => store.weather.wheatherForecast);
  const { data: cityData } = useAppSelector((store) => store.weather.wheatherCity);
  const cityWeather = cityData[0];

  const dayLabel = cityWeather
    ? formatToLocalTime(cityWeather.dt, timeZone, "cccc")
    : undefined;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem]">
      <div className="flex flex-col gap-6">
        <TimeAndLocation />
        <WeatherDetails />
        <ForecastList items={daily} title="Daily forecast" variant="daily" />
      </div>

      <ForecastList
        items={hourly}
        title="Hourly forecast"
        variant="hourly"
        dayLabel={dayLabel}
      />
    </div>
  );
};
