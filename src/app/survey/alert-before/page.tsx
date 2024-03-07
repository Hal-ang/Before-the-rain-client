"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import BackHeader from "@/components/header/BackHeader";
import Button from "@/components/bottombar/BottomBar";
import FadeTitle from "@/components/FadeTitle";
import FixedBottomBar from "@/components/bottombar/FixedBottomBar";
import ProgressBar from "@/components/ProgressBar";
import TimeInput from "@/components/input/TimeInput";
import TransitionTitle from "@/components/TransitionTitle";
import useFocused from "@/hooks/useFocused";
import { useRouter } from "next/navigation";

const AlertBefore = () => {
  const [percent, setPercent] = useState(0);
  const router = useRouter();
  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);
  const [isDone, setIsDone] = useState(false);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (!isDone) return;
    setPercent(50);
  }, [isDone]);

  const { isFocused: isHourFocused, bind: hourBind } = useFocused();
  const { isFocused: isMinuteFocused, bind: minuteBind } = useFocused();

  const isFocused = useMemo(
    () => isHourFocused || isMinuteFocused,
    [isHourFocused, isMinuteFocused]
  );

  useEffect(() => {
    if (isFocused) return;

    const hour = Number(hourRef.current?.value);
    const minute = Number(minuteRef.current?.value);
    const value = hour * 60 + minute;
    setMinutes(value);
    if (value > 0) {
      setIsDone(true);
    }
  }, [isFocused]);

  return (
    <main className="min-h-screen w-full flex flex-col">
      <BackHeader onClickBack={() => router.back()} />
      <section className="w-full px-12pxr">
        <ProgressBar percent={percent} />
      </section>
      <section className={`grow flex flex-col items-center px-20pxr`}>
        <div
          className={isFocused ? undefined : "flex-1"}
          style={{ transition: "flex 0.5s ease-in" }}
        />
        <TransitionTitle shouldChange={isFocused} text="미리 알려 드릴게요" />
        <div className="mt-124pxr w-full flex flex-row items-center justify-center">
          <TimeInput
            hourRef={hourRef}
            minuteRef={minuteRef}
            hourBind={hourBind}
            minuteBind={minuteBind}
          />
        </div>
        <div className=" flex-1" />
      </section>
      {isDone && <FixedBottomBar text="다음" />}
    </main>
  );
};

export default AlertBefore;
