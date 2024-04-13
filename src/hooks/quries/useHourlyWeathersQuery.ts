"use client";

import { getHourlyWeathers } from "@/api";
import { useAtomValue } from "jotai";
import { useSuspenseQuery } from "@tanstack/react-query";
import useUser from "../useUser";

const useHourlyWeathersQuery = () => {
  const { coordinates } = useUser();

  return useSuspenseQuery({
    queryKey: ["hourlyWeathers", coordinates?.updatedAt],
    queryFn: () => getHourlyWeathers(coordinates?.lat, coordinates?.lon)
  });
};

export default useHourlyWeathersQuery;
