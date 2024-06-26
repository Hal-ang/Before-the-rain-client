import * as Sentry from "@sentry/react";

import {
  HourlyWeatherResponse,
  Survey,
  TodayBannerResponse,
  TodaySummaryResponse,
  UserReponse
} from "./type";

export const fetchAPI = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
      ? process.env.NEXT_PUBLIC_MOCKING_API_URL
      : process.env.NEXT_PUBLIC_API_URL;

  const url = `${API_BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return (await response.json()) as T;
  } catch (error) {
    console.error(`Fetching error at ${url}:`, error);
    throw new Error(`An error happened: ${error}`);
  }
};

export const getTodayWeahterBanner = async (lat?: number, lon?: number) => {
  Sentry.captureMessage(
    `배너 API 호출 ${`/weathers/today/banner?lat=${lat}&lon=${lon}`}`
  );
  if (!lat || !lon) return;
  return fetchAPI<TodayBannerResponse>(
    `/weathers/today/banner?lat=${lat}&lon=${lon}`
  );
};

export const getTodaySummary = async (lat?: number, lon?: number) => {
  Sentry.captureMessage(
    `getTodaySummary API 호출 ${`/weathers/today/banner?lat=${lat}&lon=${lon}`}`
  );
  if (!lat || !lon) return;
  return fetchAPI<TodaySummaryResponse>(
    `/weathers/today/summary?lat=${lat}&lon=${lon}`
  );
};
export const getHourlyWeathers = async (lat?: number, lon?: number) => {
  if (!lat || !lon) return;
  return fetchAPI<HourlyWeatherResponse>(
    `/weathers/hourly?lat=${lat}&lon=${lon}&offset=24`
  );
};

export const createUser = async (survey: Survey, fcmToken?: string) => {
  const data = await fetchAPI<UserReponse>("/users", {
    method: "POST",
    body: JSON.stringify({
      fcmToken,
      survey
    })
  });

  return data;
};

export const updateSurvey = async (survey: Survey, userId: string) => {
  return fetchAPI<Survey>("/surveys", {
    method: "PUT",
    body: JSON.stringify({ survey }),
    headers: {
      Authorization: userId
    }
  });
};

export const updateUserToken = async (fcmToken: string, userId: string) =>
  fetchAPI<UserReponse>("/users", {
    method: "PATCH",
    body: JSON.stringify({ fcmToken }),
    headers: {
      Authorization: userId
    }
  });
