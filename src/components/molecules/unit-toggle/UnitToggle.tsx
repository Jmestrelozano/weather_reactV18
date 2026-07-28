import { UilSetting } from "@iconscout/react-unicons";
import { Button } from "../../atoms/button/Button";
import { Text } from "../../atoms/text/Text";

export interface UnitToggleProps {
  onCelsiusClick?: () => void;
  onFahrenheitClick?: () => void;
}

export const UnitToggle = ({ onCelsiusClick, onFahrenheitClick }: UnitToggleProps) => {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-weather-surface px-3 py-2 text-sm text-white">
      <UilSetting size={16} className="text-weather-muted" />
      <Text as="span" className="mx-1 font-medium">
        Units
      </Text>
      <Button
        name="metric"
        className="rounded px-1.5 py-0.5 text-xs text-weather-muted transition hover:text-white"
        onClick={onCelsiusClick}
        aria-label="Celsius"
      >
        °C
      </Button>
      <Text as="span" className="text-weather-muted">
        |
      </Text>
      <Button
        name="imperial"
        className="rounded px-1.5 py-0.5 text-xs text-weather-muted transition hover:text-white"
        onClick={onFahrenheitClick}
        aria-label="Fahrenheit"
      >
        °F
      </Button>
    </div>
  );
};
