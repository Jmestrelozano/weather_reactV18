import { UilLocationPoint } from "@iconscout/react-unicons";
import { useEffect } from "react";
import { useAppDispatch } from "../../Global/globales";
import { getWeatherByLocation } from "../../Services/WeatherServices/getWeatherByLocation.service";

interface props {
  countryName: { name: string };
  setCountryName: React.Dispatch<
    React.SetStateAction<{
      name: string;
    }>
  >;
  location: () => void;
  coords: { lat: number; long: number; isError: boolean };
}
export const InputSearch = ({
  countryName,
  setCountryName,
  location,
  coords: { lat, long, isError },
}: props) => {
  const { name } = countryName;
  const dispatch = useAppDispatch();
  const handleOnchangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName({
      ...countryName,
      name: e.target.value,
    });
  };

  useEffect(() => {
    !isError && dispatch(getWeatherByLocation(lat, long));
  }, [lat, long]);

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          onChange={(e) => handleOnchangeText(e)}
          type="text"
          value={name}
          placeholder="Search..."
          className="text-xl font-light  p-2  w-full shadow-xl 
         focus:outline-none capitalize placeholder:lowercase"
        />

        <button
          role={"button"}
          aria-labelledby="input-button-location"
          arial-label="input-button-location"
          onClick={location}
        >
          <UilLocationPoint
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
        </button>
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light">
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button name="metric" className="text-xl text-white font-light">
          °F
        </button>
      </div>
    </div>
  );
};
