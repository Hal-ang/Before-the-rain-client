import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState
} from "react";

import { FocusBind } from "@/hooks/useFocused";
import LargeInput from "./LargeInput";

const attributes = {
  className: "w-96pxr",
  type: "number",
  inputMode: "numeric" as "numeric",
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
  minuteBind,
  useTime
}: {
  hourBind: FocusBind;
  minuteBind: FocusBind;
  hourRef: RefObject<HTMLInputElement>;
  minuteRef: RefObject<HTMLInputElement>;
  useTime: [number, Dispatch<SetStateAction<number>>];
}) => {
  const [time, setTime] = useTime;
  const [hour, setHour] = useState(time ? String(Math.floor(time / 60)) : "");
  const [minute, setMinute] = useState(time ? String(time % 60) : "");

  useEffect(() => {
    const hourNum = parseInt(hour);
    const minuteNum = parseInt(minute);

    if (isNaN(hourNum)) return;
    setTime(hourNum * 60 + (isNaN(minuteNum) ? 0 : minuteNum));
  }, [hour, minute]);

  return (
    <div className="flex flex-row items-center gap-x-16pxr">
      <LargeInput
        ref={hourRef}
        {...attributes}
        value={hour}
        onChange={(e) => {
          const value = e.target.value;

          setHour(parseInt(value) > 23 ? "23" : value.slice(0, 2));

          if (value.length === 2) {
            if (!parseInt(minute)) {
              minuteRef.current?.focus();
            } else {
              hourRef.current?.blur();
            }
          }
        }}
        {...hourBind}
      />
      <p className={LABEL_CLASSNAME}>시간</p>
      <LargeInput
        ref={minuteRef}
        {...attributes}
        max={60}
        value={minute}
        onChange={(e) => {
          const value = e.target.value;

          setMinute(parseInt(value) > 59 ? "59" : value.slice(0, 2));

          if (value.length === 2) {
            minuteRef.current?.blur();
          }
        }}
        {...minuteBind}
      />
      <p className={LABEL_CLASSNAME}>분 전</p>
    </div>
  );
};

export default TimeInput;
