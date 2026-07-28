import { Text } from "../../atoms/text/Text";
import { WeatherIcon } from "../../atoms/weather-icon/WeatherIcon";

export interface ForecastItemProps {
  title: string;
  temp: number;
  icon: string;
}

export const ForecastItem = ({ title, temp, icon }: ForecastItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Text className="font-light text-sm">{title}</Text>
      <WeatherIcon code={icon} />
      <Text className="font-medium">{temp.toFixed()}°</Text>
    </div>
  );
};
