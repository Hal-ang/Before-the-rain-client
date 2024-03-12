"use client";

import { CDN_URL, EMOJI_PATH } from "@/constants/image";

import { getTodayWeahterBanner } from "@/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useWebviewContext } from "@/components/Webview";

export const SUMMARY_TYPE = {
  smile: {
    desc: "오늘은 조금",
    title: "안심해도 되겠어요!",
    imageUrl: CDN_URL + EMOJI_PATH.smile
  },
  worry: {
    desc: "운에 맡기시려고요?",
    title: "혹시 몰라요...",
    imageUrl: CDN_URL + EMOJI_PATH.worry
  },
  umbrella: {
    desc: "비가 올 확률이 높아요",
    title: "우산을 챙기세요!",
    imageUrl: CDN_URL + EMOJI_PATH.umbrella
  }
};

const useTodayWeatherBannerQuery = () => {
  const {
    coordinate: { latitude, longitude }
  } = useWebviewContext();
  return useSuspenseQuery({
    queryKey: ["summary", latitude, longitude],
    queryFn: () => getTodayWeahterBanner(latitude, longitude)
  });
};

export default useTodayWeatherBannerQuery;
