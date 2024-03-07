import React, { ButtonHTMLAttributes, HTMLProps } from "react";

export interface BottomBarProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const BottomBar = ({ text, ...rest }: BottomBarProps) => (
  <button
    {...rest}
    className="w-full rounded-10pxr bg-dark-primary text-dark-on-primary text-center button-b-18 py-15pxr"
  >
    {text}
  </button>
);

export default BottomBar;
