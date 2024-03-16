"use client";

import { getTodaySummary } from "@/api";
import { useAtomValue } from "jotai";
import { useSuspenseQuery } from "@tanstack/react-query";
import { userCoordinatesAtom } from "@/atom/webview";

const useTodaySummaryQuery = () => {
  const { lat, lon } = useAtomValue(userCoordinatesAtom);
  // longitude 호추 시점 고민해보기.. caching
  return useSuspenseQuery({
    queryKey: ["todaySummary"],
    queryFn: () => getTodaySummary(lat, lon)
  });
};

export default useTodaySummaryQuery;
