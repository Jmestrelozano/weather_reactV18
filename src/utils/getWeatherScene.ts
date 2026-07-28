export type WeatherEffectType =
  | "clear"
  | "clouds"
  | "rain"
  | "thunder"
  | "snow"
  | "mist";

export interface WeatherSceneActive {
  kind: "weather";
  imageCode: string;
  effect: WeatherEffectType;
  imageUrl: string;
}

export interface WeatherSceneIdle {
  kind: "idle";
}

export type WeatherScene = WeatherSceneActive | WeatherSceneIdle;

const AVAILABLE_IMAGES = new Set([
  "01d",
  "01n",
  "02d",
  "03d",
  "03n",
  "04d",
  "04n",
  "09d",
  "09n",
  "10d",
  "10n",
  "11d",
  "11n",
  "50d",
]);

const IMAGE_FALLBACKS: Record<string, string> = {
  "02n": "03n",
  "13d": "03d",
  "13n": "03n",
  "50n": "50d",
};

const effectFromPrefix = (prefix: string): WeatherEffectType => {
  switch (prefix) {
    case "01":
      return "clear";
    case "02":
    case "03":
    case "04":
      return "clouds";
    case "09":
    case "10":
      return "rain";
    case "11":
      return "thunder";
    case "13":
      return "snow";
    case "50":
      return "mist";
    default:
      return "clear";
  }
};

const resolveImageCode = (iconCode: string): string => {
  if (AVAILABLE_IMAGES.has(iconCode)) {
    return iconCode;
  }

  const fallback = IMAGE_FALLBACKS[iconCode];
  if (fallback && AVAILABLE_IMAGES.has(fallback)) {
    return fallback;
  }

  const isNight = iconCode.endsWith("n");
  return isNight ? "03n" : "03d";
};

export const getWeatherScene = (iconCode?: string | null): WeatherScene => {
  if (!iconCode || iconCode.length < 2) {
    return { kind: "idle" };
  }

  const prefix = iconCode.slice(0, 2);
  const imageCode = resolveImageCode(iconCode);

  return {
    kind: "weather",
    imageCode,
    effect: effectFromPrefix(prefix),
    imageUrl: `/assets/${imageCode}.avif`,
  };
};
