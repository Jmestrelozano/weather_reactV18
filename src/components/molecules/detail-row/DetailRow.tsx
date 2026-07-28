import { ReactNode } from "react";
import { Text } from "../../atoms/text/Text";

export interface DetailRowProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export const DetailRow = ({ icon, label, value }: DetailRowProps) => {
  return (
    <div className="flex font-light text-sm items-center justify-center">
      {icon}
      {label}:
      <Text as="span" className="font-medium ml-1">
        {value}
      </Text>
    </div>
  );
};
