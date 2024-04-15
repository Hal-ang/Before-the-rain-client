"use client";

import { getHourlyWeathers } from "@/api";
import { useQuery } from "@tanstack/react-query";
import useUser from "../useUser";

const useHourlyWeathersQuery = () => {
  const { coordinates } = useUser();

  return useQuery({
    queryKey: ["hourlyWeathers", coordinates?.lat, coordinates?.lon],
    queryFn: () => getHourlyWeathers(coordinates?.lat, coordinates?.lon)
  });
};

export default useHourlyWeathersQuery;
