import Flex from "@/components/Flex";
import Onboarding from "@/components/survey/Onboarding";
import React from "react";
import SurveyFlow from "@/components/survey/SurveyFlow";

const SurveyPage = () => {
  return (
    <Flex as="main" direction="column" className="min-h-screen w-full">
      <SurveyFlow Onboarding={Onboarding}></SurveyFlow>
    </Flex>
  );
};

export default SurveyPage;
