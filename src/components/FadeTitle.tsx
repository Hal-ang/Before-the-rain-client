import React from "react";

const FadeTitle = ({
  fontStyle = "heading-b-32",
  text,
  transitionProperty = "font-size"
}: {
  fontStyle?: string;
  text: string;
  transitionProperty?: string;
}) => {
  return (
    <h3
      className={`${fontStyle} text-white fade-title text-center`}
      style={
        transitionProperty
          ? { transition: `${transitionProperty} 0.5s ease-out` }
          : undefined
      }
    >
      {text}
    </h3>
  );
};

export default FadeTitle;
