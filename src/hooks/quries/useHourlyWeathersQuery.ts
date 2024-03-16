"use client";

import { getHourlyWeathers } from "@/api";
import { useAtomValue } from "jotai";
import { useSuspenseQuery } from "@tanstack/react-query";
import { userCoordinatesAtom } from "@/atom/webview";

const useHourlyWeathersQuery = () => {
  // TODO : 캐싱, 호출 로직 고민해보기
  const { lat, lon } = useAtomValue(userCoordinatesAtom);
  return useSuspenseQuery({
    queryKey: ["hourlyWeathers"],
    queryFn: () => getHourlyWeathers(lat, lon)
  });
};

export default useHourlyWeathersQuery;
