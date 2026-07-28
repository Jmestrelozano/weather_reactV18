import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { Button } from "../../atoms/button/Button";
import { SearchField } from "../../molecules/search-field/SearchField";

export interface SearchBarProps {
  countryName: { name: string };
  setCountryName: Dispatch<SetStateAction<{ name: string }>>;
  location: () => void;
  onSearch?: () => void;
}

export const SearchBar = ({
  countryName,
  setCountryName,
  location,
  onSearch,
}: SearchBarProps) => {
  const { name } = countryName;

  const handleOnchangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setCountryName({
      ...countryName,
      name: e.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center"
    >
      <div className="min-w-0 flex-1">
        <SearchField value={name} onChange={handleOnchangeText} onLocationClick={location} />
      </div>
      <Button
        type="submit"
        className="w-full rounded-xl bg-weather-accent px-6 py-3.5 text-base font-medium text-white transition hover:brightness-110 sm:w-auto sm:min-w-[7.5rem]"
      >
        Search
      </Button>
    </form>
  );
};
