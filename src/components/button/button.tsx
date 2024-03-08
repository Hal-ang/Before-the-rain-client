import React, { ButtonHTMLAttributes, useRef } from "react";

import RippleButton from "./RippleButton";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  className?: string;
}

const Button = ({ children, onClick, className, ...rest }: ButtonProps) => {
  return (
    <RippleButton
      onClick={onClick}
      {...rest}
      className={`px-24pxr py-10pxr rounded-100pxr font-medium text-18pxr leading-20pxr ${className}`}
    >
      {children}
    </RippleButton>
  );
};

function withButton(
  Component: (props: ButtonProps) => JSX.Element,
  className: string
) {
  return function EnhancedComponent(_props: ButtonProps) {
    return <Component {..._props} className={className} />;
  };
}

export const PrimaryButton = withButton(
  Button,
  "text-dark-on-primary bg-dark-primary"
);

export const SecondaryButton = withButton(
  Button,
  "text-dark-primary border border-dark-outline"
);
