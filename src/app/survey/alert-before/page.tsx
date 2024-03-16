"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useAtom, useSetAtom } from "jotai";

import BackHeader from "@/components/header/BackHeader";
import FadeTitle from "@/components/FadeTitle";
import FixedBottomBar from "@/components/bottombar/FixedBottomBar";
import ProgressBar from "@/components/ProgressBar";
import TimeInput from "@/components/input/TimeInput";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import { surveyAtom } from "@/atom/survey";
import useFocused from "@/hooks/useFocused";
import useNextSurvey from "@/hooks/survey/useNextSurvey";
import { useRouter } from "next/navigation";
import useSurveyProgressPercent from "@/hooks/survey/useSurveyProgressPercent";
import useVisualViewportHeight from "@/hooks/useVisualViewportHeight";

const AlertBefore = () => {
  const viewportHeight = useVisualViewportHeight();
  const router = useRouter();
  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);
  const [isDone, setIsDone] = useState(false);

  const setSurvey = useSetAtom(surveyAtom);

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
        shouldTransition={isFocused}
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
