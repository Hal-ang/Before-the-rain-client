"use client";

import { getHourlyWeathers } from "@/api";
import { useQuery } from "@tanstack/react-query";
import useUser from "../useUser";

const useHourlyWeathersQuery = () => {
  const { coordinates } = useUser();

  return useQuery({
    enabled: !!(coordinates?.lat && coordinates?.lon),
    queryKey: ["hourlyWeathers", coordinates?.lat, coordinates?.lon],
    queryFn: () => getHourlyWeathers(coordinates?.lat, coordinates?.lon)
  });
};

export default useHourlyWeathersQuery;
