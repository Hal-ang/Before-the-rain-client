import {
  HourlyWeatherResponse,
  TodayBannerResponse,
  TodaySummaryResponse
} from "./type";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ? process.env.NEXT_PUBLIC_MOCKING_API_URL
    : process.env.NEXT_PUBLIC_API_URL;

export const getTodayWeahterBanner = async (lat: number, lon: number) => {
  const res = await fetch(
    `${API_BASE_URL}/weathers/today/banner?lat=${lat}&lon=${lon}`
  );
  const data: TodayBannerResponse = await res.json();
  return data;
};

export const getTodaySummary = async (lat: number, lon: number) => {
  const res = await fetch(
    `${API_BASE_URL}/weathers/today/summary?lat=${lat}&lon=${lon}`
  );
  const data: TodaySummaryResponse = await res.json();
  return data;
};

export const getHourlyWeathers = async (lat: number, lon: number) => {
  const res = await fetch(
    `${API_BASE_URL}/weathers/hourly?lat=${lat}&lon=${lon}&offset=24`
  );
  const data: HourlyWeatherResponse = await res.json();
  return data;
};
