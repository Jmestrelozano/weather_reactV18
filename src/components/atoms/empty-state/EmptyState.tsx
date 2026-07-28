import { Text } from "../text/Text";

export interface EmptyStateProps {
  message: string;
  className?: string;
}

export const EmptyState = ({
  message,
  className = "flex justify-center items-center h-28 text-white font-semibold text-2xl",
}: EmptyStateProps) => {
  return (
    <div className={className}>
      <Text>{message}</Text>
    </div>
  );
};
