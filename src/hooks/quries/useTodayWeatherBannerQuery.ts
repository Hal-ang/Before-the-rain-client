"use client";

import { getTodayWeahterBanner } from "@/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useWebviewContext } from "@/components/Webview";

const useTodayWeatherBannerQuery = () => {
  const {
    coordinate: { latitude, longitude }
  } = useWebviewContext();
  return useSuspenseQuery({
    queryKey: ["summary", latitude, longitude],
    queryFn: () => getTodayWeahterBanner(latitude, longitude)
  });
};

export default useTodayWeatherBannerQuery;
