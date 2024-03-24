import { CardLayout } from "@/components/layout/card";
import { HourlyWeatherResponse } from "@/api/type";
import React from "react";
import WeatherSection from "@/components/content/WeatherSection";
import { getKoreanHour } from "@/utils/date";

const HourlyWeatherContainer = ({ data }: { data: HourlyWeatherResponse }) => {
  return (
    <CardLayout
      data-testid="HourlyWeatherContainer"
      state="dark-outline"
      className="mt-13pxr px-20pxr pt-14pxr"
    >
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

export default HourlyWeatherContainer;
