# OpenWeatherMap — origen y uso en Weather Zone

## De dónde se obtiene

Los datos meteorológicos vienen de **OpenWeather** (Current & Forecast APIs):

- Documentación oficial (Current weather):  
  https://openweathermap.org/api/current?collection=current_forecast#one
- Base URL usada en el proyecto: `https://api.openweathermap.org/data/2.5`
- API key: variable de entorno `VITE_OPENWEATHER_API_KEY` (archivo `.env`, no se sube a git)
- Plantilla: copia `.env.template` → `.env` y rellena la key
- Cómo obtener una key: [API keys en tu cuenta OpenWeather](https://home.openweathermap.org/api_keys)

## Cómo se usa en este repo

El cliente HTTP centraliza las peticiones en `src/services/weather-services/weather-api.client.ts`:

```ts
fetch(`${BaseURL}${path}&appid=${ApiKEY}&units=metric`)
```

Siempre se envían:

| Parámetro | Valor | Motivo |
| --------- | ----- | ------ |
| `appid`   | `ApiKEY` | Autenticación obligatoria |
| `units`   | `metric` | Temperaturas en °C |

### Endpoints que consume la app

| Endpoint | Servicio | Uso |
| -------- | -------- | --- |
| `GET /weather?q={city}` | `getWeatherByCity.service.ts` | Clima actual por nombre de ciudad |
| `GET /weather?lat={lat}&lon={lon}` | `getWeatherByLocation.service.ts` | Clima actual por coordenadas (geolocalización) |
| `GET /forecast?lat={lat}&lon={lon}` | `getWeatherForecast.service.ts` | Pronóstico 5 días / 3 horas |

Ejemplo de llamada (documentación oficial, por coordenadas):

```
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

En la app, el equivalente queda encapsulado así:

```ts
await fetchWeatherApi<IWeatherByCity>(`/weather?lat=${lat}&lon=${lon}`);
```

### Flujo típico

1. El usuario busca una ciudad o usa su ubicación.
2. Se llama a `/weather` y el resultado se guarda en Redux (`weather.slice`).
3. Con `coord.lat` / `coord.lon` de esa respuesta se llama a `/forecast`.
4. Los iconos de condición se resuelven con `iconUrlFromCode` → `https://openweathermap.org/img/wn/{code}@2x.png`.

## Referencias rápidas

- Current weather (by city / lat-lon): [OpenWeather Current API](https://openweathermap.org/api/current?collection=current_forecast#one)
- 5 Day / 3 Hour Forecast: documentado en la misma colección Current & Forecast
- Config del proyecto: `src/global/weatherApi.ts`
