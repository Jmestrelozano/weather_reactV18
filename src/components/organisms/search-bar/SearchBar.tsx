import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { SearchField } from "../../molecules/search-field/SearchField";
import { UnitToggle } from "../../molecules/unit-toggle/UnitToggle";

export interface SearchBarProps {
  countryName: { name: string };
  setCountryName: Dispatch<SetStateAction<{ name: string }>>;
  location: () => void;
}

export const SearchBar = ({ countryName, setCountryName, location }: SearchBarProps) => {
  const { name } = countryName;

  const handleOnchangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setCountryName({
      ...countryName,
      name: e.target.value,
    });
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <SearchField value={name} onChange={handleOnchangeText} onLocationClick={location} />
      <UnitToggle />
    </div>
  );
};
