"use client";

import { getTodaySummary } from "@/api";
import { useAtomValue } from "jotai";
import { useQuery } from "@tanstack/react-query";
import { userCoordinatesAtom } from "@/atom/webview";

const useTodaySummaryQuery = () => {
  const { lat, lon } = useAtomValue(userCoordinatesAtom);

  return useQuery({
    queryKey: ["todaySummary", lat, lon],
    queryFn: () => getTodaySummary(lat, lon)
  });
};

export default useTodaySummaryQuery;
