import React, { ReactNode } from "react";

import { TRANSITION_DURATIN } from "@/constants/duration";

interface TransitionTightSectionProps {
  shouldTransition: boolean;
  Top: ReactNode;
  Bottom?: ReactNode;
}
const TransitionTightSection = ({
  shouldTransition,
  Top,
  Bottom
}: TransitionTightSectionProps) => {
  return (
    <section className="grow flex flex-col items-center px-20pxr">
      <div
        className={`w-full flex justify-center items-center will-change-contents ${
          shouldTransition ? "flex-0 mt-12pxr" : "flex-1"
        }`}
        style={{ transition: `flex ${TRANSITION_DURATIN}ms ease-out` }}
      >
        {Top}
      </div>
      {Bottom && (
        <div className="mt-64pxr w-full flex-1 flex flex-row items-start justify-center">
          {Bottom}
        </div>
      )}
    </section>
  );
};

export default TransitionTightSection;
