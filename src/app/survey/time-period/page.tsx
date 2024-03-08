"use client";

import React, { useEffect } from "react";

import BackHeader from "@/components/header/BackHeader";
import FadeTitle from "@/components/FadeTitle";
import { PAGE_TRANSITION_DURATION } from "@/constants/duration";
import ProgressBar from "@/components/ProgressBar";
import TransitionTightSection from "@/components/layout/TransitionTightSection";

const TimePeriod = () => {
  const [shouldTransition, setShouldTransition] = React.useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShouldTransition(true);
    }, PAGE_TRANSITION_DURATION);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col">
      <BackHeader />
      <section className="w-full px-12pxr">
        <ProgressBar percent={75} />
      </section>
      <TransitionTightSection
        shouldTransition={shouldTransition}
        Top={<FadeTitle text="맞춰서 알려 드릴게요" />}
      />
    </main>
  );
};

export default TimePeriod;
