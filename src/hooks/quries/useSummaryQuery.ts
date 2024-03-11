import React, { useMemo } from "react";

import { EMOJI_PATH } from "@/constants/image";
import { getSummary } from "@/api.ts";
import { useQuery } from "@tanstack/react-query";
import { useWebviewContext } from "@/components/Webview";

const SUMMARY_TYPE = {
  smile: {
    desc: "오늘은 조금",
    title: "안심해도 되겠어요!",
    imageUrl: process.env.NEXT_PUBLIC_CDN_URL + EMOJI_PATH.smile
  },
  worry: {
    desc: "운에 맡기시려고요?",
    title: "혹시 몰라요...",
    imageUrl: process.env.NEXT_PUBLIC_CDN_URL + EMOJI_PATH.worry
  },
  umbrella: {
    desc: "비가 올 확률이 높아요",
    title: "우산을 챙기세요!",
    imageUrl: process.env.NEXT_PUBLIC_CDN_URL + EMOJI_PATH.umbrella
  }
};

const useSummaryQuery = () => {
  const { coordinate } = useWebviewContext();
  const { data: summaryData } = useQuery({
    queryKey: ["summary", coordinate.latitude, coordinate.longitude],
    queryFn: () => getSummary(coordinate.latitude, coordinate.longitude)
  });

  const summaryProps = useMemo(() => {
    const { smile, worry, umbrella } = SUMMARY_TYPE;

    const rainGage = summaryData ? Math.max(...summaryData.rainGage) : 0;

    if (rainGage === 0) return { ...smile, rainGage };
    if (rainGage < 0.4) return { ...worry, rainGage };
    return { ...umbrella, rainGage };
  }, [summaryData]);
  return { summaryProps };
};

export default useSummaryQuery;
