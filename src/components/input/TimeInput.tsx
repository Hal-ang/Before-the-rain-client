import React, { useRef } from "react";

import Input from "./Input";

const TimeInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Input
      ref={ref}
      type="number"
      inputMode="numeric"
      pattern="[0-9]*"
      max={23}
      onChange={(e) => {
        if (e.target.value.length === 2) {
          ref.current?.blur();
        }
      }}
      maxLength={2}
      min={0}
      placeholder={"00"}
      className="w-96pxr"
    />
  );
};

export default TimeInput;
