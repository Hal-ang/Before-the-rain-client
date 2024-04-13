"use client";

import React, { useCallback, useEffect, useState } from "react";

import AlertBefore from "./step/AlertBefore";
import AlertSummaryAgreed from "./step/AlertSummaryAgreed";
import AlertSummarySelect from "./step/AlertSummarySelect";
import BackHeader from "../header/BackHeader";
import Done from "./Done";
import Flex from "../Flex";
import Onboarding from "./Onboarding";
import { SURVEY_STEP } from "@/constants/survey";
import SurveyProgressBar from "./SurveyProgressBar";
import { SurveyState } from "@/types/survey";
import { Survey as SurveyType } from "@/api/type";
import TimePeriods from "./step/TimePeriods";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";

export interface SurveyStepProps {
  onNext: () => void;
}

const Survey = ({ onSubmit }: { onSubmit: (survey: SurveyType) => void }) => {
  const user = useUser();

  const [{ step, ...surveyValues }, setSurveyValues] = useState<SurveyState>({
    alertBeforeRain: 0,
    timePeriods: [],
    summaryAlertTime: 0,
    isAgreedSummaryAlert: null,
    step: 0
  });

  const handleOnboardingNext = useCallback(() => {
    setSurveyValues((prev) => ({ ...prev, step: SURVEY_STEP.AlertBefore }));
  }, []);

  const handleAlertBeforeChange = useCallback(
    (alertBeforeRain: SurveyState["alertBeforeRain"]) => {
      setSurveyValues((prev) => ({
        ...prev,
        alertBeforeRain,
        step: SURVEY_STEP.TimePeriods
      }));
    },
    []
  );

  const handleTimePeriodsChange = useCallback(
    (timePeriods: SurveyState["timePeriods"]) => {
      setSurveyValues((prev) => ({
        ...prev,
        timePeriods,
        step: SURVEY_STEP.AlertSummaryAgreed
      }));
    },
    []
  );

  const handleSummaryAgreedChange = useCallback(
    (isAgreedSummaryAlert: SurveyState["isAgreedSummaryAlert"]) => {
      setSurveyValues((prev) => ({
        ...prev,
        isAgreedSummaryAlert,
        step: isAgreedSummaryAlert
          ? SURVEY_STEP.AlertSummarySelect
          : SURVEY_STEP.Done
      }));
    },
    []
  );

  const handleSummarySelectChange = useCallback(
    (summaryAlertTime: SurveyState["summaryAlertTime"]) => {
      setSurveyValues((prev) => ({
        ...prev,
        summaryAlertTime,
        step: SURVEY_STEP.Done
      }));
    },
    []
  );

  useEffect(() => {
    if (step === SURVEY_STEP.Done) {
      const { isAgreedSummaryAlert, ...pureSurvey } = surveyValues;

      onSubmit(pureSurvey);
    }
  }, [step, surveyValues]);

  const router = useRouter();
  const handleBackPress = useCallback(() => {
    if (step === SURVEY_STEP.AlertBefore) {
      router.back();
    } else {
      setSurveyValues((prev) => ({ ...prev, step: prev.step - 1 }));
    }
  }, [step]);

  return (
    <Flex as="main" direction="column" className="min-h-screen w-full">
      {user?.id === null ? (
        <Onboarding onNext={handleOnboardingNext} />
      ) : (
        <>
          <BackHeader onPressBack={handleBackPress} />
          <section className="w-full px-12pxr">
            <SurveyProgressBar survey={{ ...surveyValues, step }} />
          </section>

          {step === SURVEY_STEP.AlertBefore && (
            <AlertBefore
              onNext={handleAlertBeforeChange}
              defaultValue={surveyValues.alertBeforeRain}
            />
          )}
          {step === SURVEY_STEP.TimePeriods && (
            <TimePeriods
              onNext={handleTimePeriodsChange}
              defaultValue={surveyValues.timePeriods}
            />
          )}
          {step === SURVEY_STEP.AlertSummaryAgreed && (
            <AlertSummaryAgreed onNext={handleSummaryAgreedChange} />
          )}
          {step === SURVEY_STEP.AlertSummarySelect && (
            <AlertSummarySelect
              onNext={handleSummarySelectChange}
              defaultValue={surveyValues.summaryAlertTime}
            />
          )}
        </>
      )}
    </Flex>
  );
};

export default Survey;
