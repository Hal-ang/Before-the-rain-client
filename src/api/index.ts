import {
  HourlyWeatherResponse,
  Survey,
  TodayBannerResponse,
  TodaySummaryResponse,
  UserReponse
} from "./type";

import { PeriodValueType } from "@/types/survey";
import { StorageKey } from "@/constants/storage";

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

export const createUser = async (survey: Survey, fcmToken: string) => {
  const res = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    body: JSON.stringify({
      fcmToken,
      survey
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data: UserReponse = await res.json();
  return data;
};

export const updateUserToken = async (fcmToken: string, userId: string) => {
  const res = await fetch(`${API_BASE_URL}/users`, {
    method: "PATCH",
    body: JSON.stringify({ fcmToken }),
    headers: {
      Authorization: userId,
      "Content-Type": "application/json"
    }
  });
  const data: UserReponse = await res.json();
  return data;
};

export const updateSurvey = async (survey: Survey, userId: string) => {
  const res = await fetch(`${API_BASE_URL}/surveys`, {
    method: "PUT",
    body: JSON.stringify({
      survey
    }),
    headers: {
      Authorization: userId,
      "Content-Type": "application/json"
    }
  });
  const data: Survey = await res.json();
  return data;
};
