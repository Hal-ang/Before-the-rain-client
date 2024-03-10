import React, { ReactNode } from "react";

const StoryLayout = ({
  children,
  className = "flex flex-col items-center justify-center"
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      style={{ width: 400, minHeight: 200 }}
      className={`bg-black ${className}`}
    >
      {children}
    </div>
  );
};

export default StoryLayout;
