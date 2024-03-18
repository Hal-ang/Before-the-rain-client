import { useCallback, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

import { surveyAtom } from "@/atom/survey";
import { useAtom } from "jotai";

export enum SurveyPaths {
  AlertBefore = "/survey/alert-before",
  AlertSummaryAgree = "/survey/alert-summary/agree",
  AlertSummarySelect = "/survey/alert-summary/select",
  TimePeriod = "/survey/time-period",
  Done = "/survey/done"
}

const useNextSurvey = () => {
  const [survey, setSurvey] = useAtom(surveyAtom);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (survey.isAgreedSummaryAlert) return;

    setSurvey({ summaryAlertTime: 0 });
  }, [survey.isAgreedSummaryAlert]);

  const nextPath = useMemo(() => {
    if (pathname.includes(SurveyPaths.AlertBefore)) {
      return SurveyPaths.AlertSummaryAgree;
    } else if (pathname.includes(SurveyPaths.AlertSummaryAgree)) {
      return survey.isAgreedSummaryAlert
        ? SurveyPaths.AlertSummarySelect
        : SurveyPaths.TimePeriod;
    } else if (pathname.includes(SurveyPaths.AlertSummarySelect)) {
      return SurveyPaths.TimePeriod;
    } else if (pathname.includes(SurveyPaths.TimePeriod)) {
      return SurveyPaths.Done;
    }
    return "/";
  }, [pathname, survey.isAgreedSummaryAlert]);

  const goToNextPage = useCallback(() => {
    router.push(nextPath);
  }, [nextPath, router]);

  return { goToNextPage };
};

export default useNextSurvey;
