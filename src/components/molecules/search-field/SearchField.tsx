import { ChangeEvent } from "react";
import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
import { IconButton } from "../../atoms/icon-button/IconButton";
import { Input } from "../../atoms/input/Input";

export interface SearchFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onLocationClick: () => void;
  placeholder?: string;
}

export const SearchField = ({
  value,
  onChange,
  onLocationClick,
  placeholder = "Search for a place...",
}: SearchFieldProps) => {
  return (
    <div className="relative flex w-full items-center">
      <UilSearch
        size={18}
        className="pointer-events-none absolute left-4 text-weather-muted"
        aria-hidden="true"
      />
      <Input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="w-full rounded-xl border border-transparent bg-weather-surface py-3.5 pl-11 pr-12 text-base text-white placeholder:text-weather-muted focus:border-weather-accent focus:outline-none"
      />
      <IconButton
        aria-label="Use current location"
        onClick={onLocationClick}
        className="absolute right-3 text-weather-muted transition hover:text-white"
      >
        <UilLocationPoint size={20} />
      </IconButton>
    </div>
  );
};
