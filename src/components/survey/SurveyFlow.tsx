import React, {
  ComponentType,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from "react";

import useUser from "@/hooks/useUser";

export interface SurveyStepProps {
  onNext?: () => void;
}

interface SurveyFlowProps {
  Onboarding: ComponentType<SurveyStepProps>;
}

const SurveyFlow = ({
  children,
  Onboarding
}: PropsWithChildren<SurveyFlowProps>) => {
  const user = useUser();
  const [stepIndex, setStepIndex] = useState<null | number>(() =>
    user.id ? 0 : null
  );

  const childrenArray = React.Children.toArray(children);

  const handleStepChange = useCallback(() => {
    setStepIndex((prev) => {
      if (prev === null) return 0;

      return prev + 1;
    });
  }, []);

  useEffect(() => {
    if (stepIndex === null || stepIndex < childrenArray.length) return;

    // TODO : contents 페이지 이동
  }, [stepIndex]);

  if (stepIndex === null) return <Onboarding onNext={handleStepChange} />;

  const currentChild = childrenArray[stepIndex];

  if (React.isValidElement<SurveyStepProps>(currentChild)) {
    return React.cloneElement<SurveyStepProps>(currentChild, {
      onNext: handleStepChange
    });
  }
  return currentChild;
};

export default SurveyFlow;
