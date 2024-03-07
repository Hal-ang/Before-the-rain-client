import React from "react";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <section className="w-full px-2pxr py-4pxr">
      <div className="w-full h-4pxr relative flex flex-row items-center">
        {percent !== 0 && (
          <div
            style={{
              width: `${percent}%`,
              transition: "width 0.5s ease-in-out"
            }}
            className="bg-dark-primary rounded-24pxr h-full mr-4pxr"
          />
        )}
        {percent !== 100 && (
          <div className="w-full bg-dark-primary-container rounded-24pxr flex h-full" />
        )}
        <div className="w-4pxr h-4pxr rounded-full bg-dark-primary absolute right-0 top-0" />
      </div>
    </section>
  );
};

export default ProgressBar;
