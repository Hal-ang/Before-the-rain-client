"use client";

import React, { useCallback, useMemo, useState } from "react";

import BackHeader from "@/components/header/BackHeader";
import FadeTitle from "@/components/FadeTitle";
import { LinearButton } from "@/components/button/LinearButton";
import ProgressBar from "@/components/ProgressBar";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import { surveyAtom } from "@/atom/survey";
import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import useSurveyProgressPercent from "@/hooks/survey/useSurveyProgressPercent";

const AlertSummaryAgreed = () => {
  const [isAgreed, setIsAgreed] = useState<boolean | null>(null);
  const setSurvey = useSetAtom(surveyAtom);
  const router = useRouter();

  const getClickEvents = useCallback(
    (agreed: boolean) => ({
      onClick: () => {
        setIsAgreed(agreed);

        !agreed && setSurvey({ summaryAlertTime: 0 });
      },
      onRippleEndClick: () => {
        router.push(
          agreed ? "/survey/alert-summary/select" : "/survey/time-period"
        );
      }
    }),
    []
  );

  const percent = useSurveyProgressPercent(isAgreed !== null);

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
            <LinearButton state="primary" {...getClickEvents(true)}>
              네
            </LinearButton>
            <LinearButton state="secondary" {...getClickEvents(false)}>
              아니요
            </LinearButton>
          </div>
        }
      />
    </main>
  );
};

export default AlertSummaryAgreed;
