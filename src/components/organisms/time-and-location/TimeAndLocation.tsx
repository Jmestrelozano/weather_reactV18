import { useAppSelector } from "../../../hooks/redux";
import { formatToLocalTime } from "../../../utils/formatToLocalTime";
import { Text } from "../../atoms/text/Text";
import { WeatherIcon } from "../../atoms/weather-icon/WeatherIcon";

export const TimeAndLocation = () => {
  const {
    wheatherCity: { data },
  } = useAppSelector((store) => store.weather);
  const { data: wheatherForecast } = useAppSelector((store) => store.weather.wheatherForecast);
  const cityWeather = data[0];
  const weatherCondition = cityWeather?.weather[0];

  if (!cityWeather || !weatherCondition) {
    return null;
  }

  const {
    dt,
    name,
    main: { temp },
    sys: { country },
  } = cityWeather;

  const { timeZone } = wheatherForecast;

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] bg-weather-hero px-6 py-8 sm:px-8 sm:py-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25) 0, transparent 28%), radial-gradient(circle at 80% 20%, rgba(255,180,80,0.35) 0, transparent 18%), radial-gradient(circle at 70% 75%, rgba(255,255,255,0.12) 0, transparent 22%)",
        }}
      />

      <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="text-left">
          <Text className="text-2xl font-bold text-white sm:text-3xl">
            {name}, {country}
          </Text>
          <Text className="mt-2 text-sm text-white/80 sm:text-base">
            {formatToLocalTime(dt, timeZone, "cccc, LLL d, yyyy")}
          </Text>
        </div>

        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <WeatherIcon
            code={weatherCondition.icon}
            className="h-20 w-20 drop-shadow-lg sm:h-24 sm:w-24"
            alt={weatherCondition.description}
          />
          <Text className="text-6xl font-semibold leading-none text-white sm:text-7xl">
            {temp.toFixed()}°
          </Text>
        </div>
      </div>
    </div>
  );
};
