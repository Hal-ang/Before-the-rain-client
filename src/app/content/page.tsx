import React, { Suspense } from "react";

import { CardLayout } from "@/components/layout/card";
import { HOURLY } from "@/constants/mockup";
import Header from "@/components/header/Header";
import HourlyWeathers from "@/components/content/HourlyWeathers";
import Knowhow from "../../components/content/Knowhow";
import Link from "next/link";
import TodayBanner from "@/components/content/TodayBanner";
import TodaySummary from "@/components/content/TodaySummary";

const Content = () => {
  return (
    <main className="min-h-screen w-full flex flex-col ">
      <Header text="비가 오기 전에" enableSticky />
      <section className="grow flex flex-col px-20pxr pt-7pxr">
        <Suspense
          // TODO : suspense UI 만들기
          fallback={<CardLayout state="dark-outline">loading</CardLayout>}
        >
          <TodayBanner />
        </Suspense>
        <Knowhow text="강수확률은 과거에 비슷한 날씨가 100번 있었다면 확률만큼 비가 왔다는 뜻이에요" />
        <TodaySummary />
        <div className="mt-21pxr">
          <p className="font-medium text-15pxr">👕🩳</p>
          <HourlyWeathers />
        </div>
        <div className="mt-22pxr">
          <Link
            href="/survey"
            className="text-light-secondary text-15pxr font-regular"
          >
            알람 설정
          </Link>
        </div>
        <div className="mt-10pxr">
          <Link
            href="/permission"
            className="text-light-secondary text-15pxr font-regular"
          >
            권한 설정
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Content;
