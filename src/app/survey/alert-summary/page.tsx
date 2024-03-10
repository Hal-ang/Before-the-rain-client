"use client";

import { PrimaryButton, SecondaryButton } from "@/components/button/button";
import React, { useCallback, useState } from "react";

import BackHeader from "@/components/header/BackHeader";
import FadeTitle from "@/components/FadeTitle";
import ProgressBar from "@/components/ProgressBar";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import useNextPath from "@/hooks/survey/useNextPath";
import useSurveyProgressPercent from "@/hooks/survey/useSurveyProgressPercent";

const AlertSummary = () => {
  const [isDone, setIsDone] = useState(false);
  const { goToNextPage } = useNextPath();

  const handleClick = useCallback(
    (isAgree: boolean) => {
      setIsDone(true);
      // TODO : set alert summary
      setTimeout(() => {
        goToNextPage();
      }, 500);
    },
    [goToNextPage]
  );

  const percent = useSurveyProgressPercent(isDone);

  return (
    <main className="min-h-screen w-full flex flex-col">
      <BackHeader />
      <section className="w-full px-12pxr">
        <ProgressBar percent={percent} />
      </section>
      <TransitionTightSection
        shouldTransition={false}
        Top={<FadeTitle text="요약 알림을 받으시겠어요?" />}
        Bottom={
          <div className="flex flex-row items-center gap-x-18pxr">
            <PrimaryButton onClick={() => handleClick(true)}>네</PrimaryButton>
            <SecondaryButton onClick={() => handleClick(false)}>
              아니요
            </SecondaryButton>
          </div>
        }
      />
    </main>
  );
};

export default AlertSummary;
