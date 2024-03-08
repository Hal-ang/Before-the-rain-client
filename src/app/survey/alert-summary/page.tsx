"use client";

import { PrimaryButton, SecondaryButton } from "@/components/button/button";
import React, { useState } from "react";

import BackHeader from "@/components/header/BackHeader";
import FadeTitle from "@/components/FadeTitle";
import ProgressBar from "@/components/ProgressBar";
import TransitionTightSection from "@/components/layout/TransitionTightSection";
import { useRouter } from "next/navigation";

const AlertSummary = () => {
  const [isDone, setIsDone] = useState(false);
  return (
    <main className="min-h-screen w-full flex flex-col">
      <BackHeader />
      <section className="w-full px-12pxr">
        <ProgressBar percent={!isDone ? 50 : 75} />
      </section>
      <TransitionTightSection
        shouldTransition={false}
        Top={<FadeTitle text="요약 알림을 받으시겠어요?" />}
        Bottom={
          <div className="flex flex-row items-center gap-x-18pxr">
            <PrimaryButton onClick={() => {}}>네</PrimaryButton>
            <SecondaryButton onClick={() => {}}>아니요</SecondaryButton>
          </div>
        }
      />
    </main>
  );
};

export default AlertSummary;
