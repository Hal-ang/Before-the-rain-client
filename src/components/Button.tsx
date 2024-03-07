import React, { ButtonHTMLAttributes, HTMLProps } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...rest }: ButtonProps) => (
  <button
    {...rest}
    className="w-full rounded-10pxr bg-dark-primary text-dark-on-primary text-center button-b-18 py-15pxr"
  >
    {text}
  </button>
);

export default Button;
