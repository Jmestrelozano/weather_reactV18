import { ChangeEvent } from "react";
import { UilLocationPoint } from "@iconscout/react-unicons";
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
  placeholder = "Search...",
}: SearchFieldProps) => {
  return (
    <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
      <Input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
      />
      <IconButton aria-label="input-button-location" onClick={onLocationClick}>
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </IconButton>
    </div>
  );
};
