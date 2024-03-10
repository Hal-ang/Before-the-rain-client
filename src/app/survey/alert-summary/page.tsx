"use client";

import { PrimaryButton, SecondaryButton } from "@/components/button/button";
import React, { useCallback, useState } from "react";

import BackHeader from "@/components/header/BackHeader";
import FadeTitle from "@/components/FadeTitle";
import ProgressBar from "@/components/ProgressBar";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import { useRouter } from "next/navigation";
import useSurveyProgressPercent from "@/hooks/useSurveyProgressPercent";

const AlertSummary = () => {
  const [isDone, setIsDone] = useState(false);
  const router = useRouter();

  const handleClick = useCallback((isAgree: boolean) => {
    setIsDone(true);
    // TODO : set alert summary
    router.push("/survey/time-period");
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
        Top={<FadeTitle text="요약 알림을 받으시겠어요?" />}
        Bottom={
          <div className="flex flex-row items-center gap-x-18pxr">
            <PrimaryButton onRippleEndClick={() => handleClick(true)}>
              네
            </PrimaryButton>
            <SecondaryButton onRippleEndClick={() => handleClick(false)}>
              아니요
            </SecondaryButton>
          </div>
        }
      />
    </main>
  );
};

export default AlertSummary;
