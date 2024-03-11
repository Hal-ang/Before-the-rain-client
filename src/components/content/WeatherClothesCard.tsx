import { CLOTHES, HOURLY } from "@/constants/mockup";

import { CardLayout } from "../layout/card";
import HourWeatherSection from "./HourWeatherSection";
import React from "react";
import { getKoreanHour } from "@/utils/date";

const WeatherClothesCard = ({
  weathers
}: {
  weathers: typeof HOURLY.hourly;
}) => {
  return (
    <CardLayout state="dark-outline" className="mt-13pxr px-20pxr pt-14pxzr">
      {weathers.map((weather, index) => {
        return (
          <HourWeatherSection
            key={weather.dt}
            rainGage={weather.pop}
            iconName={weather.weather[0].icon}
            clothes={CLOTHES[index]}
            hour={getKoreanHour(weather.dt)}
            temp={Math.floor(weather.temp)}
          />
        );
      })}
    </CardLayout>
  );
};

export default WeatherClothesCard;
