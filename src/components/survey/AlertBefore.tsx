import React, { useEffect, useMemo, useRef, useState } from "react";

import FadeTitle from "../FadeTitle";
import FixedBottomBar from "../bottombar/FixedBottomBar";
import { SurveyState } from "@/types/survey";
import { TRANSITION_DURATIN } from "@/constants/duration";
import TimeInput from "../input/TimeInput";
import TransitionTightSection from "../layout/TransitionTightSection";
import useFocused from "@/hooks/useFocused";

const AlertBefore = ({
  onNext,
  defaultValue
}: {
  onNext: (alertBeforeRain: SurveyState["alertBeforeRain"]) => void;
  defaultValue: SurveyState["alertBeforeRain"];
}) => {
  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);

  const [time, setTime] = useState(() => defaultValue);

  const { isFocused: isHourFocused, bind: hourBind } = useFocused();
  const { isFocused: isMinuteFocused, bind: minuteBind } = useFocused();

  const isFocused = useMemo(
    () => isHourFocused || isMinuteFocused,
    [isHourFocused, isMinuteFocused]
  );

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

  const isDone = time > 0 && !isFocused;

  return (
    <>
      <TransitionTightSection
        shouldTransition={shouldTransition}
        Top={<FadeTitle text="미리 알려 드릴게요" />}
        Bottom={
          <TimeInput
            useTime={[time, setTime]}
            hourRef={hourRef}
            minuteRef={minuteRef}
            hourBind={hourBind}
            minuteBind={minuteBind}
          />
        }
      />
      {isDone && (
        <FixedBottomBar onRippleEndClick={() => onNext(time)}>
          다음
        </FixedBottomBar>
      )}
    </>
  );
};

export default AlertBefore;
