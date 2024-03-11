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
              { id: 1, label: "코트" },
              { id: 2, label: "장갑" },
              { id: 3, label: "모자" },
              { id: 4, label: "스카프" },
              { id: 5, label: "양말" },
              { id: 6, label: "바지" },
              { id: 7, label: "셔츠" },
              { id: 8, label: "니트" },
              { id: 9, label: "패딩" },
              { id: 10, label: "티셔츠" },
              { id: 11, label: "청바지" },
              { id: 12, label: "원피스" },
              { id: 13, label: "스커트" }
            ].filter((_, index) => Math.ceil(Math.random() * 100) % 2 === 0)}
            hour={getKoreanHour(weather.dt)}
            temp={Math.floor(weather.temp)}
          />
        );
      })}
    </CardLayout>
  );
};

export default WeatherClothesCard;
