import { DarkCard, DarkOutlineCard } from "@/components/layout/card";

import { EMOJI_PATH } from "@/constants/image";
import { HOURLY } from "@/constants/mockup";
import Header from "@/components/header/Header";
import Label from "@/components/Label";
import Link from "next/link";
import Question from "@/assets/question.svg";
import React from "react";

const Content = () => {
  return (
    <main className="min-h-screen w-full flex flex-col ">
      <Header text="비가 오기 전에" enableSticky />
      <section className="grow flex flex-col px-20pxr pt-7pxr">
        <DarkOutlineCard className="flex flex-row items-center py-34pxr px-12pxr gap-x-9pxr">
          <img
            className="flex"
            style={{ width: "35%" }}
            src={process.env.NEXT_PUBLIC_CDN_URL + EMOJI_PATH.smile}
            alt="rain-emoji"
            width={131}
            height={104}
          />
          <div className="text-white flex flex-col grow">
            <p className="font-medium text-15pxr">오늘은 마음 편히</p>
            <p className="mt-2pxr font-bold text-25pxr">안심해도 되겠어요!</p>
            <p className="mt-12pxr text-light-secondary font-regular text-10pxr leading-11pxr">
              강수 확률 0%
            </p>
          </div>
        </DarkOutlineCard>
        <div className="mt-11pxr flex flex-row items-center justify-start">
          <Question />
          <p className="ml-5pxr font-regular text-10pxr text-light-secondary line-clamp-1">
            강수확률은 과거에 비슷한 날씨가 100번 있었다면 확률만큼 비가 왔다는
            뜻이에요
          </p>
        </div>
        <DarkCard className="mt-21pxr flex flex-col items-center justify-center text-white py-18pxr">
          <p className="font-regular text-12pxr ">서울특별시 은평구</p>
          <p className="mt-5pxr font-regular text-40pxr"> 3°</p>
          <p className="font-regular text-11pxr">흐림</p>
          <p className="mt-2pxr font-regular text-11pxr">최고 3° 최저 3°</p>
        </DarkCard>
        <div className="mt-21pxr">
          <p className="font-medium text-15pxr">👕🩳</p>
          <DarkOutlineCard className="mt-13pxr px-20pxr pt-14pxzr">
            {HOURLY.map((weather) => {
              return (
                <section className="text-white flex flex-row items-center last:border-none border-b border-light-secondary mb-3pxr pt-6pxr pb-10pxr px-15pxr gap-x-10pxr">
                  <div className="flex flex-col items-center">
                    <p className="font-medium text-10pxr ">6시</p>
                    <p className="mt-2pxr font-regular text-9pxr text-light-secondary">
                      {weather.rainGage * 100}%
                    </p>
                  </div>
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt=""
                    width={50}
                    height={50}
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
          </DarkOutlineCard>
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
