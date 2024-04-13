"use client";

import { getTodaySummary } from "@/api";
import { useQuery } from "@tanstack/react-query";
import useUser from "../useUser";

const useTodaySummaryQuery = () => {
  const { coordinates } = useUser();

  return useQuery({
    queryKey: ["todaySummary", coordinates?.updatedAt],
    queryFn: () => getTodaySummary(coordinates?.lat, coordinates?.lon)
  });
};

export default useTodaySummaryQuery;
