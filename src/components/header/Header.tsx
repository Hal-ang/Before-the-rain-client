import React, { ReactNode } from "react";

interface HeaderProps {
  LeftIcon?: ReactNode;
  text?: string;
  RightIcon?: ReactNode;
  enableSticky?: boolean;
  bgColor?: string;
}
const Header = ({
  LeftIcon,
  text,
  RightIcon,
  enableSticky = false,
  bgColor = "bg-black"
}: HeaderProps) => {
  return (
    <header
      className={`w-full min-h-64pxr px-8pxr flex flex-row items-center z-10 ${
        enableSticky ? "sticky top-0" : ""
      } ${bgColor}`}
    >
      {LeftIcon ? LeftIcon : <></>}
      {text && (
        <p className="pl-12pxr font-medium text-18pxr leading-18pxr text-dark-on-surface">
          {text}
        </p>
      )}
      {RightIcon ? RightIcon : <></>}
    </header>
  );
};

export default Header;
