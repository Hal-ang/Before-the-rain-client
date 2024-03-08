import React, { ReactNode } from "react";

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
        className={`w-full flex justify-center items-center ${
          shouldTransition ? "flex-0 mt-12pxr" : "flex-1"
        }`}
        style={{ transition: "flex 0.5s ease-out" }}
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
