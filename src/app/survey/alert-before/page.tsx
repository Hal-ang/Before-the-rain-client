"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import BackHeader from "@/components/header/BackHeader";
import FadeTitle from "@/components/FadeTitle";
import FixedBottomBar from "@/components/bottombar/FixedBottomBar";
import ProgressBar from "@/components/ProgressBar";
import TimeInput from "@/components/input/TimeInput";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import { surveyAtom } from "@/atom/survey";
import { useAtom } from "jotai";
import useFocused from "@/hooks/useFocused";
import useNextSurvey from "@/hooks/survey/useNextSurvey";
import useSurveyProgressPercent from "@/hooks/survey/useSurveyProgressPercent";

const AlertBefore = () => {
  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);
  const [isDone, setIsDone] = useState(false);

  const [{ alertBeforeRain }, setSurvey] = useAtom(surveyAtom);

  useEffect(() => {
    if (!alertBeforeRain || !hourRef.current || !minuteRef.current) return;

    const hour = Math.floor(alertBeforeRain / 60);
    const minute = alertBeforeRain % 60;

    hourRef.current.value = String(hour);
    minuteRef.current.value = String(minute);

    setIsDone(hour + minute > 0);
  }, [alertBeforeRain, hourRef, minuteRef]);

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
    setIsDone(value > 0);
  }, [isFocused]);

  const percent = useSurveyProgressPercent(isDone);

  const [shouldTransition, setShouldTransition] = useState(false);

  useEffect(() => {
    if (isDone) return;

    const timeoutID = setTimeout(() => {
      setShouldTransition(true);
    }, 500);
    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  useEffect(() => {
    if (!isDone) return;

    const timeoutID = setTimeout(() => {
      setShouldTransition(false);
    }, 200);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [isDone]);

  const { goToNextPage } = useNextSurvey();
  const onClickNext = () => {
    const hour = Number(hourRef.current?.value);
    const minute = Number(minuteRef.current?.value);
    const value = hour * 60 + minute;
    setSurvey({ alertBeforeRain: value });

    goToNextPage();
  };

  return (
    <main className="w-full flex flex-col min-h-screen">
      <BackHeader />
      <section className="w-full px-12pxr">
        <ProgressBar percent={percent} />
      </section>

      <TransitionTightSection
        shouldTransition={shouldTransition}
        Top={<FadeTitle text="미리 알려 드릴게요" />}
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
        <FixedBottomBar onRippleEndClick={onClickNext}>다음</FixedBottomBar>
      )}
    </main>
  );
};

export default AlertBefore;
