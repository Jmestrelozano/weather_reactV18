import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  }
>;

export const Button = ({ children, className = "", type = "button", ...rest }: ButtonProps) => {
  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
};
