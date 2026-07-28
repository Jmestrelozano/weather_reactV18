import { PropsWithChildren } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";
import { getWeatherScene } from "../../../utils/getWeatherScene";
import { WeatherEffectLayer } from "./WeatherEffectLayer";

export const WeatherBackground = ({ children }: PropsWithChildren) => {
  const { data: cityData } = useAppSelector((store) => store.weather.wheatherCity);
  const iconCode = cityData[0]?.weather[0]?.icon;
  const scene = getWeatherScene(iconCode);
  const reducedMotion = usePrefersReducedMotion();
  const isIdle = scene.kind === "idle";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-weather-bg text-white">
      <div className="pointer-events-none absolute inset-0">
        {!isIdle && (
          <div
            key={scene.imageCode}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat weather-scene-fade"
            style={{ backgroundImage: `url(${scene.imageUrl})` }}
          />
        )}

        {!isIdle && (
          <WeatherEffectLayer effect={scene.effect} reducedMotion={reducedMotion} />
        )}

        {!isIdle && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-weather-bg/90" />
        )}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {children}
      </div>
    </div>
  );
};
