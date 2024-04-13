import React, { useMemo } from "react";

import ProgressBar from "../ProgressBar";
import { SURVEY_STEP } from "@/constants/survey";
import { surveyAtom } from "@/atom/survey";
import { useAtomValue } from "jotai";

const SurveyProgressBar = () => {
  const survey = useAtomValue(surveyAtom);

  const percent = useMemo(() => {
    const stepValue = 100 / 3;

    switch (survey.step) {
      case SURVEY_STEP.AlertBefore:
        return survey.alertBeforeRain ? stepValue : 0;
      case SURVEY_STEP.TimePeriods:
        return survey.timePeriods.length > 0 ? stepValue * 2 : stepValue;
      case SURVEY_STEP.AlertSummaryAgreed:
        return typeof survey.isAgreedSummaryAlert !== "boolean"
          ? stepValue * 2
          : survey.isAgreedSummaryAlert
          ? stepValue * 2 + stepValue / 2
          : stepValue * 3;
      case SURVEY_STEP.AlertSummarySelect:
        return survey.summaryAlertTime
          ? stepValue * 3
          : stepValue * 2 + stepValue / 2;
      default:
        return 0;
    }
  }, [survey]);

  return <ProgressBar percent={percent} />;
};

export default SurveyProgressBar;
