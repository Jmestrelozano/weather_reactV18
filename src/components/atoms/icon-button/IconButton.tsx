import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type IconButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    "aria-label": string;
  }
>;

export const IconButton = ({
  children,
  className = "",
  type = "button",
  ...rest
}: IconButtonProps) => {
  return (
    <button type={type} className={className} role="button" {...rest}>
      {children}
    </button>
  );
};
