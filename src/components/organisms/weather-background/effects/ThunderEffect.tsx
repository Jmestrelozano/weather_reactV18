import { RainEffect } from "./RainEffect";

export const ThunderEffect = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <RainEffect />
      <div className="weather-thunder-flash absolute inset-0 bg-white" />
      <div className="weather-thunder-bolt absolute left-[18%] top-[12%] h-40 w-1 origin-top rotate-12 bg-gradient-to-b from-white via-yellow-100 to-transparent sm:h-56" />
      <div className="weather-thunder-bolt-alt absolute right-[28%] top-[8%] h-32 w-1 origin-top -rotate-6 bg-gradient-to-b from-white via-sky-100 to-transparent sm:h-48" />
    </div>
  );
};
