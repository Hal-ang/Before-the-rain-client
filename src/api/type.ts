import { PeriodValueType } from "@/types/survey";

export interface TodayBannerResponse {
  desc: string;
  title: string;
  imageUrl: string;
  rainGage: number;
}

export interface TodaySummaryResponse {
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
}

export interface Clothes {
  id: number;
  name: string;
}

export interface HourlyWeatherResponse {
  hourly: {
    dt: number;
    temp: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    pop: number;
    clothes: Clothes[];
  }[];
}

export interface UserReponse {
  id: number;
  fcmToken: string;
  createdAt: string;
  updatedAt: string;
}

export interface Survey {
  alertBeforeRain: number;
  timePeriods: PeriodValueType[];
  summaryAlertTime: null | number;
}
