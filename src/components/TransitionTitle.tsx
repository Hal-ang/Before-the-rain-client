import FadeTitle from "./FadeTitle";
import React from "react";

const TransitionTitle = ({
  shouldChange,
  text
}: {
  shouldChange: boolean;
  text: string;
}) => {
  return (
    <div
      className={`w-full ${
        shouldChange ? "self-start mt-12pxr" : "text-center"
      }`}
    >
      <FadeTitle
        text={text}
        fontClassName={shouldChange ? "heading-b-25" : undefined}
      />
    </div>
  );
};

export default TransitionTitle;
