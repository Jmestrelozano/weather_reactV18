import { useAppSelector } from "../Global/globales";
import { storeInterface } from "../Store/store";
import { formatToLocalTime } from "../Utils/formatToLocalTime";

export const TimeAndLocation = () => {
  const {
    wheatherCity: { data },
  } = useAppSelector((store: storeInterface) => store.weather);
  const { data: wheatherForecast } = useAppSelector(
    (store: storeInterface) => store.weather.wheatherForecast
  );
  const {
    dt,
    name,
    sys: { country },
  } = data[0];

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
