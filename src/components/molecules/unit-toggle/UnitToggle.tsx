import { Button } from "../../atoms/button/Button";
import { Text } from "../../atoms/text/Text";

export interface UnitToggleProps {
  onCelsiusClick?: () => void;
  onFahrenheitClick?: () => void;
}

export const UnitToggle = ({ onCelsiusClick, onFahrenheitClick }: UnitToggleProps) => {
  return (
    <div className="flex flex-row w-1/4 items-center justify-center">
      <Button name="metric" className="text-xl text-white font-light" onClick={onCelsiusClick}>
        °C
      </Button>
      <Text as="span" className="text-xl text-white mx-1">
        |
      </Text>
      <Button name="metric" className="text-xl text-white font-light" onClick={onFahrenheitClick}>
        °F
      </Button>
    </div>
  );
};
