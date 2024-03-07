import React from "react";

const FadeTitle = ({
  fontClassName = "heading-b-32",
  text
}: {
  fontClassName?: string;
  text: string;
}) => {
  return (
    <span
      className={`${fontClassName} text-white fade-title mx-auto`}
      style={{ transition: "font-size 0.5s ease-out, margin 0.5s ease-out" }}
    >
      {text}
    </span>
  );
};

export default FadeTitle;
