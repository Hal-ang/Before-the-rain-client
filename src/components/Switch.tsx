import React from "react";

interface SwitchProps {
  onClick: () => void;
  checked: boolean;
}
const Switch = ({ onClick, checked }: SwitchProps) => {
  return (
    <button
      className="px-4pxr py-4pxr w-52pxr rounded-100pxr pointer"
      onClick={onClick}
      style={{
        transition: "background-color 0.2s",
        backgroundColor: checked ? "#4F378B" : "lightgray"
      }}
    >
      <div
        className="w-24pxr h-24pxr bg-white rounded-full"
        style={{
          transition: "transform 0.2s",
          transform: checked ? "translateX(20px)" : "translateX(0px)"
        }}
      />
    </button>
  );
};

export default Switch;
