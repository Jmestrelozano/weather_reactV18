import { HTMLAttributes, PropsWithChildren } from "react";

export type HeadingProps = PropsWithChildren<
  HTMLAttributes<HTMLHeadingElement> & {
    as?: "h1" | "h2" | "h3" | "h4" | "p";
    className?: string;
  }
>;

export const Heading = ({ as = "h2", children, className = "", ...rest }: HeadingProps) => {
  const Component = as;
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};
