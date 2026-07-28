import { ILocalTime } from "../../../interfaces/weather-forecast.interface";
import { Divider } from "../../atoms/divider/Divider";
import { Heading } from "../../atoms/heading/Heading";
import { ForecastItem } from "../../molecules/forecast-item/ForecastItem";

export interface ForecastListProps {
  title: string;
  items: ILocalTime[];
}

export const ForecastList = ({ title, items }: ForecastListProps) => {
  return (
    <>
      <div className="flex items-center justify-start mt-6">
        <Heading as="p" className="text-white font-medium uppercase">
          {title}
        </Heading>
      </div>

      <Divider />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <ForecastItem key={item.title} title={item.title} temp={item.temp} icon={item.icon} />
        ))}
      </div>
    </>
  );
};
