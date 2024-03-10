import React from "react";

const Label = ({ text }: { text: string }) => {
  return (
    <div className="px-5.5pxr py-2pxr rounded-100pxr text-dark-primary bg-dark-surface-container-highest text-10pxr font-medium leading-15pxr">
      {text}
    </div>
  );
};

export default Label;
