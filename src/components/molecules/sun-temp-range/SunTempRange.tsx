import { ReactNode } from "react";
import { Text } from "../../atoms/text/Text";

export interface SunTempRangeProps {
  sunriseLabel: string;
  sunsetLabel: string;
  highLabel: string;
  lowLabel: string;
  sunriseIcon: ReactNode;
  sunsetIcon: ReactNode;
  highIcon: ReactNode;
  lowIcon: ReactNode;
}

export const SunTempRange = ({
  sunriseLabel,
  sunsetLabel,
  highLabel,
  lowLabel,
  sunriseIcon,
  sunsetIcon,
  highIcon,
  lowIcon,
}: SunTempRangeProps) => {
  return (
    <div className="flex flex-row justify-center items-center space-x-2 text-white text-sm py-3">
      {sunriseIcon}
      <Text className="font-light">
        Rise:{" "}
        <Text as="span" className="font-medium ml-1">
          {sunriseLabel}
        </Text>
      </Text>
      <Text className="font-light">|</Text>

      {sunsetIcon}
      <Text className="font-light">
        Set:{" "}
        <Text as="span" className="font-medium ml-1">
          {sunsetLabel}
        </Text>
      </Text>
      <Text className="font-light">|</Text>

      {highIcon}
      <Text className="font-light">
        Hight:{" "}
        <Text as="span" className="font-medium ml-1">
          {highLabel}
        </Text>
      </Text>
      <Text className="font-light">|</Text>

      {lowIcon}
      <Text className="font-light">
        Low:{" "}
        <Text as="span" className="font-medium ml-1">
          {lowLabel}
        </Text>
      </Text>
    </div>
  );
};
