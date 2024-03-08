export type PeriodLabelType = "새벽" | "아침" | "낮" | "저녁" | "밤";
export type PeriodValueType =
  | "dawn"
  | "morning"
  | "afternoon"
  | "evening"
  | "night";

export const TIME_PERIODS: {
  label: PeriodLabelType;
  value: PeriodValueType;
  range: number[];
}[] = [
  { label: "새벽", value: "dawn", range: [3, 4, 5] },
  { label: "아침", value: "morning", range: [6, 7, 8, 9, 10, 11] },
  { label: "낮", value: "afternoon", range: [12, 13, 14, 15, 16, 17] },
  { label: "저녁", value: "evening", range: [18, 19, 20] },
  { label: "밤", value: "night", range: [21, 22, 23] }
];
