"use client";

import { getTodaySummary } from "@/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import useUser from "../useUser";

const useTodaySummaryQuery = () => {
  const { coordinates } = useUser();

  return useSuspenseQuery({
    queryKey: ["todaySummary", coordinates?.lat, coordinates?.lon],
    queryFn: () => getTodaySummary(coordinates?.lat, coordinates?.lon)
  });
};

export default useTodaySummaryQuery;
