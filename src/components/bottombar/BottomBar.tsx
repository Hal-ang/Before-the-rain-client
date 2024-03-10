import React, { ButtonHTMLAttributes, HTMLProps, useRef } from "react";
import RippleButton, { RippleButtonProps } from "../button/RippleButton";

const BottomBar = ({ children, ...rest }: RippleButtonProps) => {
  return (
    <RippleButton
      {...rest}
      className="w-full rounded-10pxr bg-dark-primary text-dark-on-primary text-center button-b-18 py-15pxr"
    >
      {children}
    </RippleButton>
  );
};

export default BottomBar;
