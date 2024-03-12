import { HOURLY } from "@/constants/mockup";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ? process.env.NEXT_PUBLIC_MOCKING_API_URL
    : process.env.NEXT_PUBLIC_API_URL;

export const getTodayWeahterBanner = async (lat: number, lon: number) => {
  const res = await fetch(
    `${API_BASE_URL}/weathers/today/banner?lat=${lat}&lon=${lon}`
  );
  const data = await res.json();

  // TODO : response 타입 정의 예정
  return data as {
    desc: string;
    title: string;
    rainGage: number;
    imageUrl: string;
  };
};

export const getTodaySummary = async (lat: number, lon: number) => {
  const res = await fetch(
    `${API_BASE_URL}/weathers/today/summary?lat=${lat}&lon=${lon}`
  );
  const data = await res.json();

  // TODO : response 타입 정의 예정
  return data as {
    dt: number;
    temp: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    };
    min: number;
    max: number;
    cityName: string;
  };
};

export const getHourlyWeathers = async (lat: number, lon: number) => {
  const res = await fetch(
    `${API_BASE_URL}/weathers/hourly?lat=${lat}&lon=${lon}&offset=24`
  );
  const data = await res.json();

  // TODO : response 타입 정의 예정
  return data as typeof HOURLY;
};
