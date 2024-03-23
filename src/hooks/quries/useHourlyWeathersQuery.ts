"use client";

import { getHourlyWeathers } from "@/api";
import { useAtomValue } from "jotai";
import { useSuspenseQuery } from "@tanstack/react-query";
import { userCoordinatesAtom } from "@/atom/webview";

const useHourlyWeathersQuery = () => {
  const { lat, lon } = useAtomValue(userCoordinatesAtom);

  return useSuspenseQuery({
    queryKey: ["hourlyWeathers", lat, lon],
    queryFn: () => getHourlyWeathers(lat, lon)
  });
};

export default useHourlyWeathersQuery;
