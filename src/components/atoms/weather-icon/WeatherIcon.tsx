import { iconUrlFromCode } from "../../../utils/iconUrlFromCode";

export interface WeatherIconProps {
  code: string;
  alt?: string;
  className?: string;
}

export const WeatherIcon = ({
  code,
  alt = "Weather icon",
  className = "w-12 my-1",
}: WeatherIconProps) => {
  return <img src={iconUrlFromCode(code)} alt={alt} className={className} />;
};
