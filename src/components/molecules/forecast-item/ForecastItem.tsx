import { Text } from "../../atoms/text/Text";
import { WeatherIcon } from "../../atoms/weather-icon/WeatherIcon";

export interface ForecastItemProps {
  title: string;
  temp: number;
  icon: string;
  variant?: "daily" | "hourly";
  tempMin?: number;
  tempMax?: number;
}

export const ForecastItem = ({
  title,
  temp,
  icon,
  variant = "daily",
  tempMin,
  tempMax,
}: ForecastItemProps) => {
  if (variant === "hourly") {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-weather-surface-elevated/60 px-3 py-3">
        <WeatherIcon code={icon} className="h-9 w-9" />
        <Text className="flex-1 text-left text-sm font-medium text-white">{title}</Text>
        <Text className="text-base font-medium text-white">{temp.toFixed()}°</Text>
      </div>
    );
  }

  const high = tempMax ?? temp;
  const low = tempMin ?? temp;

  return (
    <div className="flex flex-col items-center justify-between gap-3 rounded-2xl bg-weather-surface px-2 py-4 text-center">
      <Text className="text-sm font-medium text-white">{title}</Text>
      <WeatherIcon code={icon} className="h-12 w-12" />
      <div className="flex items-center gap-2 text-sm">
        <Text as="span" className="font-medium text-white">
          {high.toFixed()}°
        </Text>
        <Text as="span" className="text-weather-muted">
          {low.toFixed()}°
        </Text>
      </div>
    </div>
  );
};
