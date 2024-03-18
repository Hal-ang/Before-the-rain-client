import React, { RefObject } from "react";

import { FocusBind } from "@/hooks/useFocused";
import LargeInput from "./LargeInput";

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

const TimeInput = ({
  hourRef,
  minuteRef,
  hourBind,
  minuteBind
}: {
  hourBind: FocusBind;
  minuteBind: FocusBind;
  hourRef: RefObject<HTMLInputElement>;
  minuteRef: RefObject<HTMLInputElement>;
}) => {
  return (
    <div className="flex flex-row items-center gap-x-16pxr">
      <LargeInput
        ref={hourRef}
        {...attributes}
        onChange={(e) => {
          const value = e.target.value;

          const num = Number(value);
          if (hourRef.current && num > 23) {
            hourRef.current.value = "23";
          }

          if (value.length === 2) {
            hourRef.current?.blur();

            if (!minuteRef.current?.value) {
              minuteRef.current?.focus();
            }
          } else if (hourRef.current && value.length > 2) {
            hourRef.current.value = value.slice(0, 2);
            return;
          }
        }}
        {...hourBind}
      />
      <p className={LABEL_CLASSNAME}>시간</p>
      <LargeInput
        ref={minuteRef}
        {...attributes}
        max={60}
        onChange={(e) => {
          const value = e.target.value;

          const num = Number(value);
          if (minuteRef.current && num > 59) {
            minuteRef.current.value = "59";
          }

          if (e.target.value.length === 2) {
            minuteRef.current?.blur();
          } else if (minuteRef.current && e.target.value.length > 2) {
            minuteRef.current.value = e.target.value.slice(0, 2);
            return;
          }
        }}
        {...minuteBind}
      />
      <p className={LABEL_CLASSNAME}>분 전</p>
    </div>
  );
};

export default TimeInput;
