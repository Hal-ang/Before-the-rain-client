import React, { useEffect, useMemo, useRef, useState } from "react";

import FadeTitle from "../../FadeTitle";
import FixedBottomBar from "../../bottombar/FixedBottomBar";
import LargeInput from "../../input/LargeInput";
import { SurveyState } from "@/types/survey";
import { TRANSITION_DURATIN } from "@/constants/duration";
import TransitionTightSection from "../../layout/TransitionTightSection";
import useFocused from "@/hooks/useFocused";

const AlertSummarySelect = ({
  onNext,
  defaultValue
}: {
  onNext: (summaryAlertTime: SurveyState["summaryAlertTime"]) => void;
  defaultValue: number;
}) => {
  const timeRef = useRef<HTMLInputElement>(null);
  const { isFocused, bind } = useFocused();

  const [time, setTime] = useState(defaultValue ? String(defaultValue) : "");

  const [shouldTransition, setShouldTransition] = useState(false);

  useEffect(() => {
    if (defaultValue) return;

    const timeoutID = setTimeout(() => {
      setShouldTransition(true);
    }, TRANSITION_DURATIN);
    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  useEffect(() => {
    setShouldTransition(isFocused);
  }, [isFocused]);

  const isDone = !!parseInt(time) && !isFocused;

  return (
    <>
      <TransitionTightSection
        shouldTransition={shouldTransition}
        Top={<FadeTitle text={`요약 알림을\n언제 받으시겠어요?`} />}
        Bottom={
          <div className="flex flex0row items-center gap-x-16pxr">
            <LargeInput
              ref={timeRef}
              className="w-96pxr"
              type="number"
              inputMode="numeric"
              maxLength={2}
              placeholder="0"
              pattern="[0-9]*"
              value={time}
              onChange={(e) => {
                const value = e.target.value;

                setTime(parseInt(value) > 24 ? "24" : value.slice(0, 2));

                if (value.length === 2) {
                  timeRef.current?.blur();
                }
              }}
              {...bind}
            />
            <p className="text-white font-regular text-18pxr">시</p>
          </div>
        }
      />
      {isDone && (
        <FixedBottomBar onRippleEndClick={() => onNext(parseInt(time))}>
          다음
        </FixedBottomBar>
      )}
    </>
  );
};

export default AlertSummarySelect;
