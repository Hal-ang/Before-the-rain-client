"use client";

import React from "react";
import TodaySummaryLayout from "./TodaySummaryLayout";
import useTodaySummaryQuery from "@/hooks/quries/useTodaySummaryQuery";

const TodaySummary = () => {
  const { data } = useTodaySummaryQuery();

  if (!data) return null;

  return (
    <TodaySummaryLayout
      temp={Math.floor(data.temp)}
      cityName={data.cityName}
      weather={data.weather.description}
      min={data.min}
      max={data.max}
    />
  );
};

export default TodaySummary;
