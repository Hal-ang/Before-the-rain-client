import { RIPPLE_DURATION } from "@/constants/duration";
import React from "react";

interface ProgressBarProps {
  percent: number;
}

const duration = RIPPLE_DURATION / 2;
const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <section className="w-full px-2pxr py-4pxr">
      <div className="w-full h-4pxr relative flex flex-row items-center">
        <div
          style={{
            width: `${percent}%`,
            transition: `width ${duration}ms ease-in-out`
          }}
          className="bg-dark-primary rounded-24pxr h-full mr-4pxr"
        />

        <div
          className="grow bg-dark-primary-container rounded-24pxr flex h-full"
          style={{ transition: `width ${duration}ms ease-in-out` }}
        />

        <div className="w-4pxr h-4pxr rounded-full bg-dark-primary absolute right-0 top-0" />
      </div>
    </section>
  );
};

export default ProgressBar;
