import {
  UilArrowUp,
  UilTemperature,
  UilWind,
  UilTear,
  UilArrowDown,
  UilSunset,
  UilSun,
} from "@iconscout/react-unicons";
import { useAppSelector } from "../Global/globales";
import { storeInterface } from "../Store/store";
import { formatToLocalTime } from "../Utils/formatToLocalTime";
import { iconUrlFromCode } from "../Utils/iconUrlFromCode";

export const TemperatureAndDetails = () => {
  const { data } = useAppSelector((store: storeInterface) => store.weather.wheatherCity);
  const { data: wheatherData } = useAppSelector(
    (store: storeInterface) => store.weather.wheatherForecast
  );
  const { timeZone } = wheatherData;
  const { icon } = data[0].weather[0];
  const {
    main: { temp, feels_like, humidity, temp_max, temp_min },
    wind: { speed },
    sys: { sunrise, sunset },
  } = data[0];
  return (
    <>
      <div
        className="flex items-center justify-center py-6 
        text-xl text-cyan-300"
      >
        <p>Cloudy of whatever</p>
      </div>

      <div
        className="flex flex-row items-center justify-between 
        text-white py-3"
      >
        <img src={iconUrlFromCode(icon)} alt="NOT-FOUND" className="w-20" />
        <p className="text-5xl">{temp.toFixed()}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{feels_like.toFixed()}°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{humidity.toFixed()}%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind speed:
            <span className="font-medium ml-1">{speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row justify-center items-center space-x-2
        text-white text-sm py-3"
      >
        <UilSun />

        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timeZone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />

        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">{formatToLocalTime(sunset, timeZone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowUp />

        <p className="font-light">
          Hight: <span className="font-medium ml-1">{temp_max.toFixed()}°</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowDown />

        <p className="font-light">
          Low: <span className="font-medium ml-1">{temp_min.toFixed()}°</span>
        </p>
      </div>
    </>
  );
};
