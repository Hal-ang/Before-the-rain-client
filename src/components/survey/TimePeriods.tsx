"use client";

import { useEffect, useState } from "react";

import CheckBox from "../button/CheckBox";
import FadeTitle from "../FadeTitle";
import FixedBottomBar from "../bottombar/FixedBottomBar";
import { PAGE_TRANSITION_DURATION } from "@/constants/duration";
import { PeriodValueType } from "@/types/survey";
import { TIME_PERIODS } from "@/constants/survey";
import TransitionTightSection from "../layout/TransitionTightSection";

const TimePeriods = ({
  onNext,
  defaultValue
}: {
  onNext: (timePeriods: PeriodValueType[]) => void;
  defaultValue: PeriodValueType[];
}) => {
  const [shouldTransition, setShouldTransition] = useState(false);

  const [timePeriods, setTimePeriods] =
    useState<PeriodValueType[]>(defaultValue);
  const [visibleOptions, setVisibleOptions] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShouldTransition(true);
    }, PAGE_TRANSITION_DURATION);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  useEffect(() => {
    if (!shouldTransition) return;

    const timeoutID = setTimeout(() => {
      setVisibleOptions(true);
    }, 500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [shouldTransition]);

  const isDone = timePeriods.length > 0;

  return (
    <>
      <TransitionTightSection
        shouldTransition={shouldTransition}
        Top={<FadeTitle text="맞춰서 알려 드릴게요" />}
        Bottom={
          visibleOptions ? (
            <div className="w-full flex flex-col gap-y-18pxr mt-50pxr">
              {TIME_PERIODS.map(({ label, value, range }) => {
                const startTime = range[0];
                const endTime = range[range.length - 1];
                const type = startTime < 12 ? "AM" : "PM";

                const desc = `${type} ${startTime}:00 ~ ${endTime}:59`;
                return (
                  <CheckBox
                    key={value}
                    label={label}
                    checked={timePeriods.includes(value)}
                    desc={desc}
                    onClick={() => {
                      setTimePeriods((sp) =>
                        sp.includes(value)
                          ? sp.filter((v) => v !== value)
                          : [...sp, value]
                      );
                    }}
                  />
                );
              })}
            </div>
          ) : null
        }
      />
      {isDone && (
        <FixedBottomBar
          onRippleEndClick={() => {
            onNext(timePeriods);
          }}
        >
          완료
        </FixedBottomBar>
      )}
    </>
  );
};

export default TimePeriods;
