import type { ComponentType } from "react";
import type { WeatherEffectType } from "../../../utils/getWeatherScene";
import { ClearEffect } from "./effects/ClearEffect";
import { CloudsEffect } from "./effects/CloudsEffect";
import { MistEffect } from "./effects/MistEffect";
import { RainEffect } from "./effects/RainEffect";
import { SnowEffect } from "./effects/SnowEffect";
import { ThunderEffect } from "./effects/ThunderEffect";

interface WeatherEffectLayerProps {
  effect: WeatherEffectType;
  reducedMotion: boolean;
}

const EFFECT_COMPONENTS: Record<WeatherEffectType, ComponentType> = {
  clear: ClearEffect,
  clouds: CloudsEffect,
  rain: RainEffect,
  thunder: ThunderEffect,
  snow: SnowEffect,
  mist: MistEffect,
};

export const WeatherEffectLayer = ({
  effect,
  reducedMotion,
}: WeatherEffectLayerProps) => {
  if (reducedMotion) {
    return null;
  }

  const EffectComponent = EFFECT_COMPONENTS[effect] ?? ClearEffect;

  return (
    <div key={effect} className="pointer-events-none absolute inset-0 weather-scene-fade">
      <EffectComponent />
    </div>
  );
};
