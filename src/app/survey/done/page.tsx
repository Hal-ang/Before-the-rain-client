"use client";

import React, { useEffect, useMemo } from "react";

import FadeTitle from "@/components/FadeTitle";
import { PAGE_TRANSITION_DURATION } from "@/constants/duration";
import { useRouter } from "next/navigation";

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
      <img
        className="fixed left-0 -z-10"
        src={"https://d1j05o5l6xx0ft.cloudfront.net" + "/black-particle.gif"}
        alt="particle"
      />

      <FadeTitle text={titleText} />
    </main>
  );
};

export default Done;
