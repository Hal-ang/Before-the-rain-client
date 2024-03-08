import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <section {...rest} className={`rounded-12pxr ${className}`}>
      {children}
    </section>
  );
};

function withCard(
  Component: (props: CardProps) => JSX.Element,
  className: string
) {
  return function EnhancedComponent(_props: CardProps) {
    return (
      <Component {..._props} className={`${_props.className} ${className}`} />
    );
  };
}

export const DarkOutlineCard = withCard(
  Card,
  "border border-dark-outline-variant bg-dark-surface"
);
export const DarkCard = withCard(Card, "bg-dark-surface-container-highest");
