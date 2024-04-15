"use client";

import { getTodayWeahterBanner } from "@/api";
import { useQuery } from "@tanstack/react-query";
import useUser from "../useUser";

const useTodayWeatherBannerQuery = () => {
  const { coordinates } = useUser();

  return useQuery({
    enabled: !!(coordinates?.lat && coordinates?.lon),
    queryKey: ["weatherBanner", coordinates?.lat, coordinates?.lon],
    queryFn: () => getTodayWeahterBanner(coordinates?.lat, coordinates?.lon)
  });
};

export default useTodayWeatherBannerQuery;
