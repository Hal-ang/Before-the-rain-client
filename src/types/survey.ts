export type PeriodLabelType = "새벽" | "아침" | "낮" | "저녁" | "밤";
export type PeriodValueType =
  | "dawn"
  | "morning"
  | "afternoon"
  | "evening"
  | "night";

export interface Survey {
  alertBeforeRain: number;
  timePeriods: PeriodValueType[];
  summaryAlertTime: string;
}
