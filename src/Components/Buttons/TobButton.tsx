import { useAppSelector as useSelector } from "../../Global/globales";
import { storeInterface } from "../../Store/store";

interface props {
  tabClick: React.Dispatch<React.SetStateAction<string>>;
}
export const TobButton = ({ tabClick }: props) => {
  const {
    popularCitys: { data: popularCitys },
  } = useSelector((store: storeInterface) => store.country);
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
