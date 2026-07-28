import { useAppSelector } from "../../../hooks/redux";
import { Text } from "../../atoms/text/Text";

interface MetricCardProps {
  label: string;
  value: string;
}

const MetricCard = ({ label, value }: MetricCardProps) => {
  return (
    <div className="rounded-2xl bg-weather-surface px-4 py-4 sm:px-5 sm:py-5">
      <Text className="text-sm text-weather-muted">{label}</Text>
      <Text className="mt-3 text-2xl font-medium text-white sm:text-3xl">{value}</Text>
    </div>
  );
};

export const WeatherDetails = () => {
  const { data } = useAppSelector((store) => store.weather.wheatherCity);
  const cityWeather = data[0];

  if (!cityWeather) {
    return null;
  }

  const {
    main: { feels_like, humidity },
    wind: { speed },
    rain,
  } = cityWeather;

  const precipitation = rain?.["1h"] ?? rain?.["3h"] ?? 0;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      <MetricCard label="Feels Like" value={`${feels_like.toFixed()}°`} />
      <MetricCard label="Humidity" value={`${humidity.toFixed()}%`} />
      <MetricCard label="Wind" value={`${speed.toFixed()} km/h`} />
      <MetricCard label="Precipitation" value={`${precipitation} mm`} />
    </div>
  );
};
