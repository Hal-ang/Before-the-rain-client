import { CardLayout } from "../layout/card";
import { HOURLY } from "@/constants/mockup";
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
      {weathers.map((weather) => {
        return (
          <HourWeatherSection
            key={weather.dt}
            rainGage={weather.pop}
            iconName={weather.weather[0].icon}
            clothes={[
              { id: 0, label: "목도리" },
              { id: 1, label: "코트" }
            ]}
            hour={getKoreanHour(weather.dt)}
            temp={Math.floor(weather.temp)}
          />
        );
      })}
    </CardLayout>
  );
};

export default WeatherClothesCard;
