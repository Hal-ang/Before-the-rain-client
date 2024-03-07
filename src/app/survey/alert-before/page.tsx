"use client";

import React, { useState } from "react";

import BackHeader from "@/components/header/BackHeader";
import Button from "@/components/Button";
import FadeTitle from "@/components/FadeTitle";
import FixedBottomBar from "@/components/bottombar/FixedBottomBar";
import ProgressBar from "@/components/ProgressBar";
import TimeInput from "@/components/input/TimeInput";
import { useRouter } from "next/navigation";

const AlertBefore = () => {
  const [percent, setPercent] = useState(40);
  const router = useRouter();

  return (
    <main className="min-h-screen w-full flex flex-col">
      <BackHeader onClickBack={() => router.back()} />
      <section className="w-full px-12pxr">
        <ProgressBar percent={percent} />
      </section>
      <section className="grow flex flex-col items-center px-20pxr">
        <div className=" flex-1" />
        <FadeTitle text="미리 알려 드릴게요" />
        <div className=" flex-1" />
        <div className="w-full flex flex-row items-center justify-center">
          <TimeInput />
        </div>
        <div className=" flex-1" />
      </section>
      <FixedBottomBar text="다음" />
    </main>
  );
};

export default AlertBefore;
