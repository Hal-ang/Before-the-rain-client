"use client";

import { SURVEY_INITIAL_STATE, surveyAtom } from "@/atom/survey";
import { createUser, updateSurvey } from "@/api";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useMemo } from "react";

import { DotLottiePlayer } from "@dotlottie/react-player";
import { FCMTokenAtom } from "@/atom/webview";
import FadeTitle from "../FadeTitle";
import { StorageKey } from "@/constants/storage";
import { Survey } from "@/api/type";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";

const particleData = require("/public/particle.lottie");

const Done = () => {
  const [survey, setSurvey] = useAtom(surveyAtom);
  const router = useRouter();

  const {
    mutate: _createUser,
    status,
    isPending: isCreating,
    isSuccess: isCreatingSuccess
  } = useMutation({
    mutationFn: ({ survey }: { survey: Survey }) =>
      createUser(survey, fcmToken),
    onSuccess(data) {
      setSurvey(SURVEY_INITIAL_STATE);
      if (data.id) {
        localStorage.setItem(StorageKey.UserId, `${data.id}`);
      }
      router.push("/content");
    }
  });

  const {
    mutate: _updateSurvey,
    isPending: isUpdating,
    isSuccess: isUpdatingSuccess
  } = useMutation({
    mutationFn: (params: { survey: Survey; userId: string }) =>
      updateSurvey(params.survey, params.userId),
    onSuccess() {
      router.push("/content");
    }
  });

  const titleText = useMemo(() => {
    if (isUpdating || isCreating) return "설정 중입니다..";
    else if (isCreatingSuccess) return "환영합니다!";
    else if (isUpdatingSuccess) return "수정 되었습니다!";
    return `문제가 발생했어요\n 앱을 다시 시작해주세요`;
  }, [isUpdating, isCreating, isCreatingSuccess, isUpdatingSuccess]);

  const fcmToken = useAtomValue(FCMTokenAtom);

  const user = useUser();

  useEffect(() => {
    if (status !== "idle") return;
    const { isAgreedSummaryAlert, ...restSurvey } = survey;
    if (!user?.id) {
      _createUser({ survey: restSurvey });
    } else {
      _updateSurvey({ survey: restSurvey, userId: String(user.id) });
    }
  }, [status, survey, user?.id]);

  return (
    <>
      <DotLottiePlayer
        src={particleData}
        autoplay
        className="fixed left-1/2"
        style={{ transform: "translate(-50%, 0)" }}
      />

      <FadeTitle text={titleText} />
    </>
  );
};

export default Done;
