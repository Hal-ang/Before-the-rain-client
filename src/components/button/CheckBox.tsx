import React, { ButtonHTMLAttributes } from "react";

import ActiveRadio from "@/assets/active_radio.svg";
import InactiveRadio from "@/assets/inactive_radio.svg";
import RippleButton from "./RippleButton";

interface CheckBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  checked: boolean;
  label: string;
  desc?: string;
}
const CheckBox = ({ label, desc, checked, onClick }: CheckBoxProps) => {
  return (
    <RippleButton
      onClick={onClick}
      className={`py-10pxr px-10pxr rounded-100pxr font-medium border border-dark-outline flex flex-row items-center ${
        checked ? "bg-dark-on-secondary" : ""
      }`}
    >
      <div className="w-55pxr flex flex-row justify-between items-center">
        {checked ? <ActiveRadio /> : <InactiveRadio />}
        <p className="leading-20pxr text-15pxr text-dark-on-secondary-container">
          {label}
        </p>
      </div>
      {desc && (
        <p
          className={`grow text-10pxr leading-20pxr text-left ml-8pxr ${
            checked ? "text-white" : "text-light-secondary"
          }`}
        >
          {desc}
        </p>
      )}
    </RippleButton>
  );
};

export default CheckBox;
