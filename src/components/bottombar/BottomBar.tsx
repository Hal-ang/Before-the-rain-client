import React, { ButtonHTMLAttributes, HTMLProps, useRef } from "react";

import RippleButton from "../button/RippleButton";

export interface BottomBarProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const BottomBar = ({ children, onClick, ...rest }: BottomBarProps) => {
  return (
    <RippleButton
      {...rest}
      onClick={onClick}
      className="w-full rounded-10pxr bg-dark-primary text-dark-on-primary text-center button-b-18 py-15pxr"
    >
      {children}
    </RippleButton>
  );
};

export default BottomBar;
