import { SurveyState } from "@/types/survey";
import { atom } from "jotai";

export const SURVEY_INITIAL_STATE = {
  alertBeforeRain: 0,
  timePeriods: [],
  summaryAlertTime: 0,
  isAgreedSummaryAlert: null
};
const _surveyAtom = atom<SurveyState>(SURVEY_INITIAL_STATE);

export const surveyAtom = atom(
  (get) => get(_surveyAtom),
  (get, set, _survey: Partial<SurveyState>) => {
    const survey = get(_surveyAtom);
    set(_surveyAtom, { ...survey, ..._survey });
  }
);
