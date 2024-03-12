import { CardLayout } from "../layout/card";
import React from "react";

interface TodaySummaryLayoutProps {
  temp: number;
  cityName: string;
  weather: string;
  min: number;
  max: number;
}
const TodaySummaryLayout = ({
  temp,
  cityName,
  weather,
  min,
  max
}: TodaySummaryLayoutProps) => {
  return (
    <CardLayout
      state="dark"
      className="mt-21pxr flex flex-col items-center justify-center text-white py-18pxr"
    >
      <p className="font-regular text-12pxr ">{cityName}</p>
      <p className="mt-5pxr font-regular text-40pxr"> {temp}°</p>
      <p className="font-regular text-11pxr">{weather}</p>
      <p className="mt-2pxr font-regular text-11pxr">
        최고 {max}° 최저 {min}°
      </p>
    </CardLayout>
  );
};

export default TodaySummaryLayout;
