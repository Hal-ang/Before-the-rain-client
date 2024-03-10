"use client";

import React, { useMemo } from "react";

import { CardLayout } from "@/components/layout/card";
import { EMOJI_PATH } from "@/constants/image";
import { HOURLY } from "@/constants/mockup";
import Header from "@/components/header/Header";
import Image from "next/image";
import Knowhow from "../../components/content/Knowhow";
import Label from "@/components/Label";
import Link from "next/link";
import SummaryCard from "@/components/content/SummaryCard";

const RESPONSE = {
  dt: 1684929490,
  rainGage: [0] // 오늘 강수 확률,
};

const SUMMARY_DATA = {
  smile: {
    desc: "오늘은 조금",
    title: "안심해도 되겠어요!",
    imageUrl: process.env.NEXT_PUBLIC_CDN_URL + EMOJI_PATH.smile
  },
  worry: {
    desc: "운에 맡기시려고요?",
    title: "혹시 몰라요...",
    imageUrl: process.env.NEXT_PUBLIC_CDN_URL + EMOJI_PATH.worry
  },
  umbrella: {
    desc: "비가 올 확률이 높아요",
    title: "우산을 챙기세요!",
    imageUrl: process.env.NEXT_PUBLIC_CDN_URL + EMOJI_PATH.umbrella
  }
};

const Content = () => {
  const maxRainGage = useMemo(
    () => Math.max(...RESPONSE.rainGage),
    RESPONSE.rainGage
  );

  const summary = useMemo(() => {
    if (maxRainGage === 0) return SUMMARY_DATA.smile;
    if (maxRainGage < 0.4) return SUMMARY_DATA.worry;
    return SUMMARY_DATA.umbrella;
  }, [maxRainGage]);

  return (
    <main className="min-h-screen w-full flex flex-col ">
      <Header text="비가 오기 전에" enableSticky />
      <section className="grow flex flex-col px-20pxr pt-7pxr">
        <SummaryCard rainGage={maxRainGage} {...summary} />

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
          <CardLayout
            state="dark-outline"
            className="mt-13pxr px-20pxr pt-14pxzr"
          >
            {HOURLY.map((weather) => {
              return (
                <section
                  key={weather.dt}
                  className="text-white flex flex-row items-center last:border-none border-b border-light-secondary mb-3pxr pt-6pxr pb-10pxr px-15pxr gap-x-10pxr"
                >
                  <div className="flex flex-col items-center">
                    <p className="font-medium text-10pxr ">6시</p>
                    <p className="mt-2pxr font-regular text-9pxr text-light-secondary">
                      {weather.rainGage * 100}%
                    </p>
                  </div>
                  <Image
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt=""
                    width={50}
                    height={50}
                    priority={true}
                  />
                  <div className="flex flex-col justify-center gap-y-3pxr">
                    <p className="font-regular text-13pxr leading-17pxr">16°</p>
                    <div className="flex flex-row flex-wrap items-center justify-start gap-x-6pxr">
                      {weather.clothes.map((cloth) => (
                        <Label key={cloth.id} text={cloth.label} />
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </CardLayout>
        </div>
        <div className="mt-22pxr pb-85pxr">
          <Link
            href="/survey"
            className="text-light-secondary text-15pxr font-regular"
          >
            알람 설정
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Content;
