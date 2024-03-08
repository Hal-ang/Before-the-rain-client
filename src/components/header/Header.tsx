import React, { ReactNode } from "react";

interface HeaderProps {
  LeftIcon?: ReactNode;
  text?: string;
  RightIcon?: ReactNode;
}
const Header = ({ LeftIcon, text, RightIcon }: HeaderProps) => {
  return (
    <header className="w-full px-8pxr py-12pxr sticky top-0">
      {LeftIcon ? LeftIcon : <></>}
      {text && (
        <p className="font-medium text-18pxr leading-18pxr text-dark-on-surface">
          {text}
        </p>
      )}
      {RightIcon ? RightIcon : <></>}
    </header>
  );
};

export default Header;
