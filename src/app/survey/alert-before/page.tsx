"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import BackHeader from "@/components/header/BackHeader";
import FadeTitle from "@/components/FadeTitle";
import FixedBottomBar from "@/components/bottombar/FixedBottomBar";
import ProgressBar from "@/components/ProgressBar";
import TimeInput from "@/components/input/TimeInput";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import useFocused from "@/hooks/useFocused";
import { useInterval } from "@/hooks/useInterval";
import { useRouter } from "next/navigation";

const AlertBefore = () => {
  const router = useRouter();
  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);
  const [isDone, setIsDone] = useState(false);
  const [minutes, setMinutes] = useState(0);

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
    setIsDone(value > 0);
  }, [isFocused]);

  return (
    <main className="min-h-screen w-full flex flex-col">
      <BackHeader />
      <section className="w-full px-12pxr">
        <ProgressBar key={"no"} percent={!isDone ? 0 : 50} />
      </section>

      <TransitionTightSection
        shouldTransition={isFocused}
        Top={
          <FadeTitle
            text="미리 알려 드릴게요"
            fontStyle={isFocused ? "heading-b-25" : undefined}
          />
        }
        Bottom={
          <TimeInput
            hourRef={hourRef}
            minuteRef={minuteRef}
            hourBind={hourBind}
            minuteBind={minuteBind}
          />
        }
      />

      {isDone && (
        <FixedBottomBar onClick={() => router.push("/survey/alert-summary")}>
          다음
        </FixedBottomBar>
      )}
    </main>
  );
};

export default AlertBefore;
