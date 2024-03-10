import React, { useMemo } from "react";

import { SURVEY_STEPS } from "@/constants/survey";
import { usePathname } from "next/navigation";

export const getSurveyProgressPercent = (path: string) => {
  const index = SURVEY_STEPS.findIndex((step) => path.includes(step));
  if (index < 0) return null;
  const stepValue = 100 / SURVEY_STEPS.length - 1;
  return {
    start: stepValue * index,
    end: index === SURVEY_STEPS.length - 1 ? 100 : stepValue * (index + 1)
  };
};

const useSurveyProgressPercent = (isDone: boolean) => {
  const pathname = usePathname();

  const percent = useMemo(() => {
    const _percent = getSurveyProgressPercent(pathname);
    if (_percent === null) return 0;
    return !isDone ? _percent.start : _percent.end;
  }, [isDone, pathname]);

  return percent;
};

export default useSurveyProgressPercent;
