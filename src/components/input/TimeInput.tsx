import React, { useRef } from "react";

import Input from "./Input";

const attributes = {
  className: "w-96pxr",
  type: "number",
  inputMode: "numeric" as
    | "search"
    | "text"
    | "none"
    | "numeric"
    | "email"
    | "tel"
    | "url"
    | "decimal"
    | undefined,
  pattern: "[0-9]*",
  maxLength: 2,
  min: 0,
  placeholder: "00"
};

const LABEL_CLASSNAME = "text-white font-regular text-18pxr";

const TimeInput = () => {
  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-row items-center gap-x-16pxr">
      <Input
        ref={hourRef}
        {...attributes}
        max={23}
        onChange={(e) => {
          if (e.target.value.length === 2) {
            hourRef.current?.blur();

            if (!minuteRef.current?.value) {
              minuteRef.current?.focus();
            }
          } else if (hourRef.current && e.target.value.length > 2) {
            hourRef.current.value = e.target.value.slice(0, 2);
            return;
          }
        }}
      />
      <p className={LABEL_CLASSNAME}>시간</p>
      <Input
        ref={minuteRef}
        {...attributes}
        max={60}
        onChange={(e) => {
          if (e.target.value.length === 2) {
            minuteRef.current?.blur();
          } else if (minuteRef.current && e.target.value.length > 2) {
            minuteRef.current.value = e.target.value.slice(0, 2);
            return;
          }
        }}
      />
      <p className={LABEL_CLASSNAME}>분 전</p>
    </div>
  );
};

export default TimeInput;
