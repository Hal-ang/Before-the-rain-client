import { useCallback, useMemo } from "react";

import { SurveyPaths } from "./useNextSurvey";
import { surveyAtom } from "@/atom/survey";
import { useAtomValue } from "jotai";
import { usePathname } from "next/navigation";

const useSurveyProgressPercent = (isDone: boolean) => {
  const survey = useAtomValue(surveyAtom);

  const pathname = usePathname();

  const getSurveyProgressPercent = useCallback(() => {
    const stepValue = 100 / 3;

    if (pathname === SurveyPaths.AlertBefore) {
      return {
        start: 0,
        end: stepValue
      };
    } else if (pathname === SurveyPaths.AlertSummaryAgree) {
      return {
        start: stepValue,
        end: survey.isAgreedSummaryAlert
          ? stepValue + stepValue / 2
          : stepValue * 2
      };
    } else if (pathname === SurveyPaths.AlertSummarySelect) {
      return {
        start: stepValue + stepValue / 2,
        end: stepValue * 2
      };
    } else if (pathname === SurveyPaths.TimePeriod) {
      return {
        start: stepValue * 2,
        end: stepValue * 3
      };
    }
    return null;
  }, [pathname, survey.isAgreedSummaryAlert]);

  const percent = useMemo(() => {
    const _percent = getSurveyProgressPercent();
    if (_percent === null) return 0;
    return !isDone ? _percent.start : _percent.end;
  }, [isDone, getSurveyProgressPercent]);

  return percent;
};

export default useSurveyProgressPercent;
