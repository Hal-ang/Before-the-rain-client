import React from "react";
import { TRANSITION_DURATIN } from "@/constants/duration";

const FadeTitle = ({
  fontStyle = "heading-b-32",
  text,
  transitionProperty = "all"
}: {
  fontStyle?: string;
  text: string;
  transitionProperty?: string;
}) => {
  return (
    <h3
      className={`${fontStyle} text-white fade-title text-center will-change-contents whitespace-pre-line`}
      style={
        transitionProperty
          ? {
              transition: `${transitionProperty} ${TRANSITION_DURATIN}ms ease-out`
            }
          : undefined
      }
    >
      {text}
    </h3>
  );
};

export default FadeTitle;
