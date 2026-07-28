import { ReactNode } from "react";
import { EmptyState } from "../../atoms/empty-state/EmptyState";
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
  emptyMessage = "Sin busqueda",
  footer,
}: WeatherHomeTemplateProps) => {
  return (
    <WeatherBackground>
      {header}
      {search}
      {weatherContent ?? <EmptyState message={emptyMessage} />}
      {footer}
    </WeatherBackground>
  );
};
