import { useCallback, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

import { SURVEY_STEPS } from "@/constants/survey";

const useNextSurvey = () => {
  const pathname = usePathname();
  const router = useRouter();

  const nextPath = useMemo(() => {
    const index = SURVEY_STEPS.findIndex((step) => pathname.includes(step));

    if (index < 0) return "/";
    return index === SURVEY_STEPS.length - 1
      ? "/survey/done"
      : SURVEY_STEPS[index + 1];
  }, [pathname]);

  const goToNextPage = useCallback(() => {
    router.push(nextPath);
  }, [nextPath]);

  return { goToNextPage };
};

export default useNextSurvey;
