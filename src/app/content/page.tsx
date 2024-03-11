"use client";

import { CardLayout } from "@/components/layout/card";
import { HOURLY } from "@/constants/mockup";
import Header from "@/components/header/Header";
import Knowhow from "../../components/content/Knowhow";
import Link from "next/link";
import React from "react";
import SummaryCard from "@/components/content/SummaryCard";
import WeatherClothesCard from "@/components/content/WeatherClothesCard";
import useSummaryQuery from "@/hooks/quries/useSummaryQuery";

const Content = () => {
  const { summaryProps } = useSummaryQuery();
  return (
    <main className="min-h-screen w-full flex flex-col ">
      <Header text="비가 오기 전에" enableSticky />
      <section className="grow flex flex-col px-20pxr pt-7pxr">
        <SummaryCard {...summaryProps} />

        <Knowhow text="강수확률은 과거에 비슷한 날씨가 100번 있었다면 확률만큼 비가 왔다는 뜻이에요" />
        <CardLayout
          state="dark"
          className="mt-21pxr flex flex-col items-center justify-center text-white py-18pxr"
        >
          <p className="font-regular text-12pxr ">서울특별시 은평구</p>
          <p className="mt-5pxr font-regular text-40pxr"> 3°</p>
          <p className="font-regular text-11pxr">흐림</p>
          <p className="mt-2pxr font-regular text-11pxr">최고 3° 최저 3°</p>
        </CardLayout>
        <div className="mt-21pxr">
          <p className="font-medium text-15pxr">👕🩳</p>
          <WeatherClothesCard weathers={HOURLY.hourly.slice(0, 28)} />
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
