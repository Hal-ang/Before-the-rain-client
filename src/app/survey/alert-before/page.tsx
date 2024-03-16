"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

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
import { useRouter } from "next/navigation";
import useSurveyProgressPercent from "@/hooks/survey/useSurveyProgressPercent";

const AlertBefore = () => {
  const router = useRouter();
  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);

  const [{ alertBeforeRain }, setSurvey] = useAtom(surveyAtom);

  const [time, setTime] = useState(() => alertBeforeRain);

  const { isFocused: isHourFocused, bind: hourBind } = useFocused();
  const { isFocused: isMinuteFocused, bind: minuteBind } = useFocused();

  const isFocused = useMemo(
    () => isHourFocused || isMinuteFocused,
    [isHourFocused, isMinuteFocused]
  );
  const isDone = useMemo(() => time > 0 && !isFocused, [isFocused, time]);

  const [shouldTransition, setShouldTransition] = useState(false);

  useEffect(() => {
    if (alertBeforeRain) return;

    const timeoutID = setTimeout(() => {
      setShouldTransition(true);
    }, 500);
    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  useEffect(() => {
    setShouldTransition(isFocused);
  }, [isFocused]);

  const { goToNextPage } = useNextSurvey();
  const onClickNext = useCallback(() => {
    setSurvey({ alertBeforeRain: time });
    goToNextPage();
  }, [time, goToNextPage]);

  const percent = useSurveyProgressPercent(isDone);

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
            useTime={[time, setTime]}
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
