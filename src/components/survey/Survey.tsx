"use client";

import React, { useCallback, useEffect } from "react";

import AlertBefore from "./AlertBefore";
import AlertSummaryAgreed from "./AlertSummaryAgreed";
import AlertSummarySelect from "./AlertSummarySelect";
import BackHeader from "../header/BackHeader";
import Done from "./Done";
import Flex from "../Flex";
import Onboarding from "./Onboarding";
import { SURVEY_STEP } from "@/constants/survey";
import SurveyProgressBar from "./SurveyProgressBar";
import { SurveyState } from "@/types/survey";
import TimePeriods from "./TimePeriods";
import { surveyAtom } from "@/atom/survey";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";

export interface SurveyStepProps {
  onNext: () => void;
}

const Survey = ({ onSubmit }: { onSubmit: () => void }) => {
  const user = useUser();
  const [{ step, ...survey }, setSurvey] = useAtom(surveyAtom);

  const handleOnboardingNext = useCallback(() => {
    setSurvey({ step: SURVEY_STEP.AlertBefore });
  }, []);

  const handleAlertBeforeChange = useCallback(
    (alertBeforeRain: SurveyState["alertBeforeRain"]) => {
      setSurvey({ alertBeforeRain, step: SURVEY_STEP.TimePeriods });
    },
    []
  );

  const handleTimePeriodsChange = useCallback(
    (timePeriods: SurveyState["timePeriods"]) => {
      setSurvey({ timePeriods, step: SURVEY_STEP.AlertSummaryAgreed });
    },
    []
  );

  const handleSummaryAgreedChange = useCallback(
    (isAgreedSummaryAlert: SurveyState["isAgreedSummaryAlert"]) => {
      setSurvey({
        isAgreedSummaryAlert,
        step: isAgreedSummaryAlert
          ? SURVEY_STEP.AlertSummarySelect
          : SURVEY_STEP.Done
      });
    },
    []
  );

  const handleSummarySelectChange = useCallback(
    (summaryAlertTime: SurveyState["summaryAlertTime"]) => {
      setSurvey({ summaryAlertTime, step: SURVEY_STEP.Done });
    },
    []
  );

  useEffect(() => {
    if (step === SURVEY_STEP.Done) {
      onSubmit();
    }
  }, [step]);
  const router = useRouter();

  const handleBackPress = useCallback(() => {
    if (step === SURVEY_STEP.AlertBefore) {
      router.back();
    } else {
      setSurvey({ step: step - 1 });
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
            <SurveyProgressBar />
          </section>

          {step === SURVEY_STEP.AlertBefore && (
            <AlertBefore
              onNext={handleAlertBeforeChange}
              defaultValue={survey.alertBeforeRain}
            />
          )}
          {step === SURVEY_STEP.TimePeriods && (
            <TimePeriods
              onNext={handleTimePeriodsChange}
              defaultValue={survey.timePeriods}
            />
          )}
          {step === SURVEY_STEP.AlertSummaryAgreed && (
            <AlertSummaryAgreed onNext={handleSummaryAgreedChange} />
          )}
          {step === SURVEY_STEP.AlertSummarySelect && (
            <AlertSummarySelect
              onNext={handleSummarySelectChange}
              defaultValue={survey.summaryAlertTime}
            />
          )}
          {step === SURVEY_STEP.Done && <Done />}
        </>
      )}
    </Flex>
  );
};

export default Survey;
