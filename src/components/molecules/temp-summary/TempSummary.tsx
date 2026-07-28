import { ReactNode } from "react";
import { Text } from "../../atoms/text/Text";
import { WeatherIcon } from "../../atoms/weather-icon/WeatherIcon";
import { DetailRow } from "../detail-row/DetailRow";

export interface TempSummaryProps {
  iconCode: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  feelsLikeIcon: ReactNode;
  humidityIcon: ReactNode;
  windIcon: ReactNode;
  conditionLabel?: string;
}

export const TempSummary = ({
  iconCode,
  temperature,
  feelsLike,
  humidity,
  windSpeed,
  feelsLikeIcon,
  humidityIcon,
  windIcon,
  conditionLabel = "Cloudy of whatever",
}: TempSummaryProps) => {
  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <Text>{conditionLabel}</Text>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <WeatherIcon code={iconCode} className="w-20" alt="Weather condition" />
        <Text className="text-5xl">{temperature.toFixed()}°</Text>
        <div className="flex flex-col space-y-2">
          <DetailRow icon={feelsLikeIcon} label="Real fell" value={`${feelsLike.toFixed()}°`} />
          <DetailRow icon={humidityIcon} label="Humidity" value={`${humidity.toFixed()}%`} />
          <DetailRow icon={windIcon} label="Wind speed" value={`${windSpeed.toFixed()} km/h`} />
        </div>
      </div>
    </>
  );
};
