"use client";

import { getTodayWeahterBanner } from "@/api";
import { useAtomValue } from "jotai";
import { useSuspenseQuery } from "@tanstack/react-query";
import { userCoordinatesAtom } from "@/atom/webview";

const useTodayWeatherBannerQuery = () => {
  const { lat, lon } = useAtomValue(userCoordinatesAtom);

  return useSuspenseQuery({
    queryKey: ["weatherBanner", lat, lon],
    queryFn: () => getTodayWeahterBanner(lat, lon)
  });
};

export default useTodayWeatherBannerQuery;
