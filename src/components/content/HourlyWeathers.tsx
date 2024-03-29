"use client";

import { CardLayout } from "../layout/card";
import React from "react";
import WeatherSection from "./WeatherSection";
import { getKoreanHour } from "@/utils/date";
import useHourlyWeathersQuery from "@/hooks/quries/useHourlyWeathersQuery";

const HourlyWeathers = () => {
  const { data } = useHourlyWeathersQuery();

  if (!data) return null;

  return (
    <CardLayout state="dark-outline" className="mt-13pxr px-20pxr pt-14pxr">
      {data?.hourly.map((weather) => (
        <WeatherSection
          key={weather.dt}
          rainGage={weather.pop}
          iconName={weather.weather[0].icon}
          clothes={weather.clothes}
          hour={getKoreanHour(weather.dt)}
          temp={Math.floor(weather.temp)}
        />
      ))}
    </CardLayout>
  );
};

export default HourlyWeathers;
