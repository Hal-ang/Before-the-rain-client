"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import BackHeader from "@/components/header/BackHeader";
import FadeTitle from "@/components/FadeTitle";
import FixedBottomBar from "@/components/bottombar/FixedBottomBar";
import ProgressBar from "@/components/ProgressBar";
import TimeInput from "@/components/input/TimeInput";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import useFocused from "@/hooks/useFocused";
import useSurveyProgressPercent from "@/hooks/useSurveyProgressPercent";
import useVisualViewportHeight from "@/hooks/useVisualViewportHeight";

const AlertBefore = () => {
  const viewportHeight = useVisualViewportHeight();
  const router = useRouter();
  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);
  const [isDone, setIsDone] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const pathname = usePathname();

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

  const percent = useSurveyProgressPercent(isDone);

  return (
    <main className="w-full flex flex-col min-h-screen">
      <BackHeader />
      <section className="w-full px-12pxr">
        <ProgressBar percent={percent} />
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
      {viewportHeight}
      {isDone && (
        <FixedBottomBar
          onRippleEndClick={() => router.push("/survey/alert-summary")}
        >
          다음
        </FixedBottomBar>
      )}
    </main>
  );
};

export default AlertBefore;
