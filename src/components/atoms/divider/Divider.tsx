export interface DividerProps {
  className?: string;
}

export const Divider = ({ className = "my-2" }: DividerProps) => {
  return <hr className={className} />;
};
