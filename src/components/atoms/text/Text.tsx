import { HTMLAttributes, PropsWithChildren } from "react";

export type TextProps = PropsWithChildren<
  HTMLAttributes<HTMLParagraphElement> & {
    as?: "p" | "span";
    className?: string;
  }
>;

export const Text = ({ as = "p", children, className = "", ...rest }: TextProps) => {
  const Component = as;
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};
