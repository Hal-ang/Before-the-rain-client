"use client";

import React, { useEffect, useMemo, useState } from "react";

import BackHeader from "@/components/header/BackHeader";
import CheckBox from "@/components/button/CheckBox";
import FadeTitle from "@/components/FadeTitle";
import FixedBottomBar from "@/components/bottombar/FixedBottomBar";
import { PAGE_TRANSITION_DURATION } from "@/constants/duration";
import { PeriodValueType } from "@/types/survey";
import ProgressBar from "@/components/ProgressBar";
import { TIME_PERIODS } from "@/constants/survey";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import useNextPath from "@/hooks/survey/useNextSurvey";
import useSurveyProgressPercent from "@/hooks/survey/useSurveyProgressPercent";

const TimePeriod = () => {
  const [shouldTransition, setShouldTransition] = useState(false);
  const [selectedPeriods, setSelectedPeriods] = useState<PeriodValueType[]>([]);
  const [visibleOptions, setVisibleOptions] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShouldTransition(true);
    }, PAGE_TRANSITION_DURATION);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  useEffect(() => {
    if (!shouldTransition) return;

    const timeoutID = setTimeout(() => {
      setVisibleOptions(true);
    }, 500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [shouldTransition]);

  const isDone = useMemo(
    () => selectedPeriods.length > 0,
    [selectedPeriods.length]
  );

  const percent = useSurveyProgressPercent(isDone);
  const { goToNextPage } = useNextPath();

  return (
    <main className="min-h-screen w-full flex flex-col">
      <BackHeader />
      <section className="w-full px-12pxr">
        <ProgressBar percent={percent} />
      </section>
      <TransitionTightSection
        shouldTransition={shouldTransition}
        Top={<FadeTitle text="맞춰서 알려 드릴게요" />}
        Bottom={
          visibleOptions ? (
            <div className="w-full flex flex-col gap-y-18pxr mt-50pxr">
              {TIME_PERIODS.map(({ label, value, range }) => {
                const startTime = range[0];
                const endTime = range[range.length - 1];
                const type = startTime < 12 ? "AM" : "PM";

                const desc = `${type} ${startTime}:00 ~ ${endTime}:59`;
                return (
                  <CheckBox
                    key={value}
                    label={label}
                    checked={selectedPeriods.includes(value)}
                    desc={desc}
                    onClick={() => {
                      setSelectedPeriods((sp) =>
                        sp.includes(value)
                          ? sp.filter((v) => v !== value)
                          : [...sp, value]
                      );
                    }}
                  />
                );
              })}
            </div>
          ) : null
        }
      />
      {isDone && (
        <FixedBottomBar onRippleEndClick={goToNextPage}>완료</FixedBottomBar>
      )}
    </main>
  );
};

export default TimePeriod;
