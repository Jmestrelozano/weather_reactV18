import { Dispatch, SetStateAction } from "react";
import { Button } from "../../atoms/button/Button";
import { useAppSelector } from "../../../global/globales";

export interface PopularCitiesProps {
  tabClick: Dispatch<SetStateAction<string>>;
}

export const PopularCities = ({ tabClick }: PopularCitiesProps) => {
  const {
    popularCitys: { data: popularCitys },
  } = useAppSelector((store) => store.country);

  return (
    <div className="flex items-center justify-around my-6">
      {popularCitys.map(({ title, id }) => (
        <Button
          key={id}
          onClick={() => tabClick(title)}
          className="text-white text-lg font-medium"
        >
          {title}
        </Button>
      ))}
    </div>
  );
};
