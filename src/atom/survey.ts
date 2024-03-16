import { Survey } from "@/types/survey";
import { atom } from "jotai";

const _surveyAtom = atom<Survey>({
  alertBeforeRain: 0,
  timePeriods: [],
  summaryAlertTime: 0
});

export const surveyAtom = atom(
  (get) => get(_surveyAtom),
  (get, set, _survey: Partial<Survey>) => {
    const survey = get(_surveyAtom);
    set(_surveyAtom, { ...survey, ..._survey });
  }
);
