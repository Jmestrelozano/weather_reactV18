import { useAppSelector } from "../Global/globales";
import { formatToLocalTime } from "../Utils/formatToLocalTime";

export const TimeAndLocation = () => {
  const {
    wheatherCity: { data },
  } = useAppSelector((store) => store.weather);
  const { data: wheatherForecast } = useAppSelector((store) => store.weather.wheatherForecast);
  const cityWeather = data[0];

  if (!cityWeather) {
    return null;
  }

  const {
    dt,
    name,
    sys: { country },
  } = cityWeather;

  const { timeZone } = wheatherForecast;
  return (
    <>
      <div className="flex items-center justify-center  my-6">
        <p className="text-white texy-xl font-extralight">{formatToLocalTime(dt, timeZone)}</p>
      </div>
      <div className="flex items-center justify-center  my-3">
        <p className="text-white texy-3xl font-medium">
          {name}, {country}
        </p>
      </div>
    </>
  );
};
