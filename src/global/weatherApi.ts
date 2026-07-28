/**
 * OpenWeatherMap Current & Forecast APIs (data/2.5).
 * Docs: https://openweathermap.org/api/current?collection=current_forecast#one
 * Uso en el proyecto: docs/api/openweathermap.md
 *
 * API key: copia `.env.template` → `.env` y define `VITE_OPENWEATHER_API_KEY`.
 */
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

if (!apiKey) {
  throw new Error(
    "Falta VITE_OPENWEATHER_API_KEY. Copia .env.template a .env y añade tu API key.",
  );
}

export const ApiKEY = apiKey;
export const BaseURL = "https://api.openweathermap.org/data/2.5";
