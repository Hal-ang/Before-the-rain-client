import React, { ReactNode } from "react";

const StoryLayout = ({
  children,
  className = "flex flex-col items-center justify-center",
  flexMode = "col-center"
}: {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  flexMode?: "row-center" | "col-center" | "none";
}) => {
  return (
    <div
      style={{ minWidth: 400, minHeight: 200 }}
      className={`bg-black ${
        flexMode !== "none"
          ? flexMode === "row-center"
            ? "flex flex-row items-center justify-center"
            : "flex flex-col items-center justify-center"
          : flexMode
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default StoryLayout;
