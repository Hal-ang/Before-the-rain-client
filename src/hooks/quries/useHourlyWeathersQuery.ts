"use client";

import { getHourlyWeathers } from "@/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useWebviewContext } from "@/components/Webview";

const useHourlyWeathersQuery = () => {
  const {
    coordinate: { latitude, longitude }
  } = useWebviewContext();
  return useSuspenseQuery({
    queryKey: ["/hourly", latitude, longitude],
    queryFn: () => getHourlyWeathers(latitude, longitude)
  });
};

export default useHourlyWeathersQuery;
