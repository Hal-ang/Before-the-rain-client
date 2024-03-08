import Question from "@/assets/question.svg";
import React from "react";

const Knowhow = ({ text }: { text: string }) => {
  return (
    <div className="mt-11pxr flex flex-row items-center justify-start">
      <Question />
      <p className="ml-5pxr font-regular text-10pxr text-light-secondary line-clamp-1">
        {text}
      </p>
    </div>
  );
};

export default Knowhow;
