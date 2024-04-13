import FadeTitle from "../FadeTitle";
import { LinearButton } from "../button/LinearButton";
import React from "react";
import TransitionTightSection from "../layout/TransitionTightSection";

const AlertSummaryAgreed = ({
  onNext
}: {
  onNext: (isAgreedSummaryAlert: boolean) => void;
}) => {
  return (
    <TransitionTightSection
      shouldTransition={false}
      Top={<FadeTitle text={`요약 알림을\n받으시겠어요?`} />}
      Bottom={
        <div className="flex flex-row items-center gap-x-18pxr">
          <LinearButton state="primary" onRippleEndClick={() => onNext(true)}>
            네
          </LinearButton>
          <LinearButton
            state="secondary"
            onRippleEndClick={() => onNext(false)}
          >
            아니요
          </LinearButton>
        </div>
      }
    />
  );
};

export default AlertSummaryAgreed;
