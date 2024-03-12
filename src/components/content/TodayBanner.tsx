"use client";

import React from "react";
import TodayBannerLayout from "./TodayBannerLayout";
import useTodayWeatherBannerQuery from "@/hooks/quries/useTodayWeatherBannerQuery";

const TodayBanner = () => {
  const { data } = useTodayWeatherBannerQuery();
  if (!data) return null;

  return <TodayBannerLayout {...data} />;
};

export default TodayBanner;
