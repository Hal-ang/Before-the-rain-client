"use client";

import React, { useEffect, useState } from "react";

import FadeTitle from "@/components/FadeTitle";
import { PAGE_TRANSITION_DURATION } from "@/constants/duration";
import { useInterval } from "@/hooks/useInterval";
import { useRouter } from "next/navigation";

const STEPS = ["첫 이용이시네요", "설정을 진행합니다!"];

const Onboarding = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  useInterval(() => {
    setCurrentIndex((ci) => ci + 1);
  }, PAGE_TRANSITION_DURATION);

  useEffect(() => {
    if (currentIndex < STEPS.length) return;

    router.push("/survey");
  }, [currentIndex]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <FadeTitle key={STEPS[currentIndex]} text={STEPS[currentIndex]} />
    </main>
  );
};

export default Onboarding;
