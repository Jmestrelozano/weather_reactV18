import { ApiKEY, BaseURL } from "../../global/weatherApi";

export class WeatherApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "WeatherApiError";
    this.status = status;
  }
}

export const fetchWeatherApi = async <T>(path: string): Promise<T> => {
  const separator = path.includes("?") ? "&" : "?";
  const response = await fetch(`${BaseURL}${path}${separator}appid=${ApiKEY}&units=metric`);

  if (!response.ok) {
    throw new WeatherApiError("Hubo un error en la conexion", response.status);
  }

  return (await response.json()) as T;
};
