import { getTodaySummary } from "@/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useWebviewContext } from "@/components/Webview";

const useTodaySummaryQuery = () => {
  const {
    coordinate: { latitude, longitude }
  } = useWebviewContext();
  // longitude 호추 시점 고민해보기.. caching
  return useSuspenseQuery({
    queryKey: ["/today/summary", latitude, longitude],
    queryFn: () => getTodaySummary(latitude, longitude)
  });
};

export default useTodaySummaryQuery;
