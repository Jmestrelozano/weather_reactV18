import { ReactNode } from "react";
import { EmptyState } from "../../atoms/empty-state/EmptyState";
import { Heading } from "../../atoms/heading/Heading";
import { WeatherBackground } from "../../organisms/weather-background/WeatherBackground";

export interface WeatherHomeTemplateProps {
  header: ReactNode;
  search: ReactNode;
  weatherContent: ReactNode | null;
  emptyMessage?: string;
  footer?: ReactNode;
}

export const WeatherHomeTemplate = ({
  header,
  search,
  weatherContent,
  emptyMessage = "Search for a place to see the weather",
  footer,
}: WeatherHomeTemplateProps) => {
  return (
    <WeatherBackground>
      {header}

      <section className="flex flex-col items-center gap-6 text-center">
        <Heading
          as="h1"
          className="max-w-xl text-[1.75rem] font-bold leading-tight text-white sm:text-4xl lg:text-[3.25rem]"
        >
          How&apos;s the sky looking today?
        </Heading>
        {search}
      </section>

      {weatherContent ?? (
        <EmptyState
          message={emptyMessage}
          className="flex justify-center items-center rounded-2xl bg-weather-surface px-6 py-16 text-weather-muted font-medium text-lg"
        />
      )}

      {footer}
    </WeatherBackground>
  );
};
