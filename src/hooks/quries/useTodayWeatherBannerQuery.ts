"use client";

import { getTodayWeahterBanner } from "@/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import useUser from "../useUser";

const useTodayWeatherBannerQuery = () => {
  const { coordinates } = useUser();

  return useSuspenseQuery({
    queryKey: ["weatherBanner", coordinates?.lat, coordinates?.lon],
    queryFn: () => getTodayWeahterBanner(coordinates?.lat, coordinates?.lon)
  });
};

export default useTodayWeatherBannerQuery;
