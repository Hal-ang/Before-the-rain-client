"use client";

import React, { useCallback, useState } from "react";

import BackHeader from "@/components/header/BackHeader";
import FadeTitle from "@/components/FadeTitle";
import { LinearButton } from "@/components/button/LinearButton";
import ProgressBar from "@/components/ProgressBar";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import useNextSurvey from "@/hooks/survey/useNextSurvey";
import useSurveyProgressPercent from "@/hooks/survey/useSurveyProgressPercent";

const AlertSummary = () => {
  const [isDone, setIsDone] = useState(false);

  const { goToNextPage } = useNextSurvey();

  const handleClick = useCallback((isAgree: boolean) => {
    // setIsDone(true);
    // setTimeout(() => {
    //   goToNextPage();
    // }, 500);
  }, []);

  const percent = useSurveyProgressPercent(isDone);

  return (
    <main className="min-h-screen w-full flex flex-col">
      <BackHeader />
      <section className="w-full px-12pxr">
        <ProgressBar percent={percent} />
      </section>
      <TransitionTightSection
        shouldTransition={false}
        Top={<FadeTitle text={`요약 알림을\n받으시겠어요?`} />}
        Bottom={
          <div className="flex flex-row items-center gap-x-18pxr">
            <LinearButton state="primary" onClick={() => handleClick(true)}>
              네
            </LinearButton>
            <LinearButton state="secondary" onRippleEndClick={goToNextPage}>
              아니요
            </LinearButton>
          </div>
        }
      />
    </main>
  );
};

export default AlertSummary;
