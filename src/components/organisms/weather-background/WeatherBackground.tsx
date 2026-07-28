import { PropsWithChildren } from "react";

export const WeatherBackground = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen w-full bg-weather-bg text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {children}
      </div>
    </div>
  );
};
