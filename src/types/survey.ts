export type PeriodLabelType = "새벽" | "아침" | "낮" | "저녁" | "밤";
export type PeriodValueType =
  | "dawn"
  | "morning"
  | "afternoon"
  | "evening"
  | "night";

export interface SurveyState {
  alertBeforeRain: number;
  timePeriods: PeriodValueType[];
  summaryAlertTime: number;
  isAgreedSummaryAlert: boolean | null;
  step: number;
}
