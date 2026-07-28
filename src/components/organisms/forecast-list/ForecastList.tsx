import { ILocalTime } from "../../../interfaces/weather-forecast.interface";
import { Heading } from "../../atoms/heading/Heading";
import { Text } from "../../atoms/text/Text";
import { ForecastItem } from "../../molecules/forecast-item/ForecastItem";

export interface ForecastListProps {
  title: string;
  items: ILocalTime[];
  variant?: "daily" | "hourly";
  dayLabel?: string;
}

export const ForecastList = ({
  title,
  items,
  variant = "daily",
  dayLabel,
}: ForecastListProps) => {
  if (variant === "hourly") {
    return (
      <section className="flex h-full flex-col rounded-[1.5rem] bg-weather-surface p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <Heading as="h2" className="text-base font-medium text-white sm:text-lg">
            {title}
          </Heading>
          {dayLabel ? (
            <Text
              as="span"
              className="rounded-full bg-weather-surface-elevated px-3 py-1.5 text-sm text-white"
            >
              {dayLabel}
            </Text>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <ForecastItem
              key={`${item.title}-${item.temp}`}
              title={item.title}
              temp={item.temp}
              icon={item.icon}
              variant="hourly"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <Heading as="h2" className="mb-4 text-base font-medium text-white sm:text-lg">
        {title}
      </Heading>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {items.map((item) => (
          <ForecastItem
            key={`${item.title}-${item.temp}`}
            title={item.title}
            temp={item.temp}
            icon={item.icon}
            tempMin={item.tempMin}
            tempMax={item.tempMax}
            variant="daily"
          />
        ))}
      </div>
    </section>
  );
};
