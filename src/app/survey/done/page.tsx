"use client";

import React, { useEffect, useMemo } from "react";

import { DotLottiePlayer } from "@dotlottie/react-player";
import FadeTitle from "@/components/FadeTitle";
import { PAGE_TRANSITION_DURATION } from "@/constants/duration";
import { useRouter } from "next/navigation";

const particleData = require("/public/particle.lottie");
const isFirstUser = true;
const Done = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      router.push("/content");
    }, PAGE_TRANSITION_DURATION);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  const titleText = useMemo(
    () => (isFirstUser ? "환영합니다!" : "수정 완료!"),
    [isFirstUser]
  );
  return (
    <main className="min-h-screen w-full flex items-center justify-center relative">
      <DotLottiePlayer
        src={particleData}
        autoplay
        className="fixed left-1/2"
        style={{ transform: "translate(-50%, 0)" }}
      />

      <FadeTitle text={titleText} />
    </main>
  );
};

export default Done;
