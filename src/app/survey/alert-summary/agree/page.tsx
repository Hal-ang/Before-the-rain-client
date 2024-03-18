"use client";

import BackHeader from "@/components/header/BackHeader";
import FadeTitle from "@/components/FadeTitle";
import { LinearButton } from "@/components/button/LinearButton";
import ProgressBar from "@/components/ProgressBar";
import React from "react";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import { surveyAtom } from "@/atom/survey";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import useSurveyProgressPercent from "@/hooks/survey/useSurveyProgressPercent";

const AlertSummaryAgree = () => {
  const [{ isAgreedSummaryAlert }, setSurvey] = useAtom(surveyAtom);
  const router = useRouter();

  const percent = useSurveyProgressPercent(isAgreedSummaryAlert !== null);

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
            <LinearButton
              state="primary"
              onClick={() => setSurvey({ isAgreedSummaryAlert: true })}
              onRippleEndClick={() =>
                router.push("/survey/alert-summary/select")
              }
            >
              네
            </LinearButton>
            <LinearButton
              state="secondary"
              onClick={() => setSurvey({ isAgreedSummaryAlert: false })}
              onRippleEndClick={() => router.push("/survey/time-period")}
            >
              아니요
            </LinearButton>
          </div>
        }
      />
    </main>
  );
};

export default AlertSummaryAgree;
