import { Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../../Global/globales";

interface TobButtonProps {
  tabClick: Dispatch<SetStateAction<string>>;
}

export const TobButton = ({ tabClick }: TobButtonProps) => {
  const {
    popularCitys: { data: popularCitys },
  } = useAppSelector((store) => store.country);
  return (
    <div className="flex items-center justify-around my-6">
      {popularCitys.map(({ title, id }) => {
        return (
          <button
            onClick={() => tabClick(title)}
            key={id}
            className="text-white text-lg font-medium"
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};
