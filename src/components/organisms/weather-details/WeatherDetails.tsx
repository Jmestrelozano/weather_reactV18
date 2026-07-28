import {
  UilArrowDown,
  UilArrowUp,
  UilSun,
  UilSunset,
  UilTear,
  UilTemperature,
  UilWind,
} from "@iconscout/react-unicons";
import { useAppSelector } from "../../../global/globales";
import { formatToLocalTime } from "../../../utils/formatToLocalTime";
import { SunTempRange } from "../../molecules/sun-temp-range/SunTempRange";
import { TempSummary } from "../../molecules/temp-summary/TempSummary";

export const WeatherDetails = () => {
  const { data } = useAppSelector((store) => store.weather.wheatherCity);
  const { data: wheatherData } = useAppSelector((store) => store.weather.wheatherForecast);
  const cityWeather = data[0];
  const weatherCondition = cityWeather?.weather[0];

  if (!cityWeather || !weatherCondition) {
    return null;
  }

  const { timeZone } = wheatherData;
  const { icon } = weatherCondition;
  const {
    main: { temp, feels_like, humidity, temp_max, temp_min },
    wind: { speed },
    sys: { sunrise, sunset },
  } = cityWeather;

  return (
    <>
      <TempSummary
        iconCode={icon}
        temperature={temp}
        feelsLike={feels_like}
        humidity={humidity}
        windSpeed={speed}
        feelsLikeIcon={<UilTemperature size={18} className="mr-1" />}
        humidityIcon={<UilTear size={18} className="mr-1" />}
        windIcon={<UilWind size={18} className="mr-1" />}
      />
      <SunTempRange
        sunriseIcon={<UilSun />}
        sunsetIcon={<UilSunset />}
        highIcon={<UilArrowUp />}
        lowIcon={<UilArrowDown />}
        sunriseLabel={formatToLocalTime(sunrise, timeZone, "hh:mm a")}
        sunsetLabel={formatToLocalTime(sunset, timeZone, "hh:mm a")}
        highLabel={`${temp_max.toFixed()}°`}
        lowLabel={`${temp_min.toFixed()}°`}
      />
    </>
  );
};
