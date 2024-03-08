import React, { ReactNode } from "react";

interface HeaderProps {
  LeftIcon?: ReactNode;
  text?: string;
  RightIcon?: ReactNode;
  enableSticky?: boolean;
}
const Header = ({
  LeftIcon,
  text,
  RightIcon,
  enableSticky = false
}: HeaderProps) => {
  return (
    <header
      className={`w-full px-8pxr py-12pxr ${
        enableSticky ? "sticky top-0" : ""
      } bg-light-on-background`}
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
