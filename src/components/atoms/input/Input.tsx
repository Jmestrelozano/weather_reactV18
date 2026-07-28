import { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = ({ className = "", type = "text", ...rest }: InputProps) => {
  return <input type={type} className={className} {...rest} />;
};
