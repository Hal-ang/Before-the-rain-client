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
import LargeInput from "@/components/input/LargeInput";
import ProgressBar from "@/components/ProgressBar";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import { surveyAtom } from "@/atom/survey";
import { useAtom } from "jotai";
import useFocused from "@/hooks/useFocused";
import { useRouter } from "next/navigation";
import useSurveyProgressPercent from "@/hooks/survey/useSurveyProgressPercent";

const AlertSummarySelect = () => {
  const timeRef = useRef<HTMLInputElement>(null);
  const { isFocused, bind } = useFocused();
  const [{ summaryAlertTime }, setSurvey] = useAtom(surveyAtom);
  const [time, setTime] = useState(
    summaryAlertTime ? String(summaryAlertTime) : ""
  );

  const [shouldTransition, setShouldTransition] = useState(false);

  useEffect(() => {
    if (summaryAlertTime) return;
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

  const router = useRouter();

  const onClickNext = useCallback(() => {
    setSurvey({ summaryAlertTime: parseInt(time) });

    router.push("/survey/time-period");
  }, [time]);

  const isDone = useMemo(
    () => !!parseInt(time) && !isFocused,
    [isFocused, time]
  );

  const percent = useSurveyProgressPercent(isDone);

  return (
    <main className="min-h-screen w-full flex flex-col">
      <BackHeader />
      <section className="w-full px-12pxr">
        <ProgressBar percent={percent} />
      </section>
      <TransitionTightSection
        shouldTransition={shouldTransition}
        Top={<FadeTitle text={`요약 알림을\n언제 받으시겠어요?`} />}
        Bottom={
          <div className="flex flex0row items-center gap-x-16pxr">
            <LargeInput
              ref={timeRef}
              className="w-96pxr"
              type="number"
              inputMode="numeric"
              maxLength={2}
              placeholder="0"
              pattern="[0-9]*"
              value={time}
              onChange={(e) => {
                const value = e.target.value;

                setTime(parseInt(value) > 24 ? "24" : value.slice(0, 2));

                if (value.length === 2) {
                  timeRef.current?.blur();
                }
              }}
              {...bind}
            />
            <p className="text-white font-regular text-18pxr">시</p>
          </div>
        }
      />
      {isDone && (
        <FixedBottomBar onRippleEndClick={onClickNext}>다음</FixedBottomBar>
      )}
    </main>
  );
};

export default AlertSummarySelect;
