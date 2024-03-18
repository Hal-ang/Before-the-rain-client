"use client";

import React, { useEffect, useMemo } from "react";
import { SURVEY_INITIAL_STATE, surveyAtom } from "@/atom/survey";
import { createUser, updateSurvey } from "@/api";
import { useAtom, useAtomValue } from "jotai";

import { DotLottiePlayer } from "@dotlottie/react-player";
import { FCMTokenAtom } from "@/atom/webview";
import FadeTitle from "@/components/FadeTitle";
import { StorageKey } from "@/constants/storage";
import { Survey } from "@/api/type";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const particleData = require("/public/particle.lottie");

const Done = () => {
  const [survey, setSurvey] = useAtom(surveyAtom);
  const router = useRouter();
  const userId = useMemo(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(StorageKey.UserId);
  }, []);

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

  const { mutate: _updateSurvey, isPending: isUpdating } = useMutation({
    mutationFn: (params: { survey: Survey; userId: string }) =>
      updateSurvey(params.survey, params.userId),
    onSuccess() {
      router.push("/content");
    }
  });

  const titleText = useMemo(() => {
    if (isUpdating || isCreating) return "설정 중입니다..";
    else if (isCreatingSuccess) return "환영합니다!";
    return "수정 되었습니다!";
  }, [isUpdating, isCreating, isCreatingSuccess]);

  const fcmToken = useAtomValue(FCMTokenAtom);

  useEffect(() => {
    if (status !== "idle") return;
    const { isAgreedSummaryAlert, ...restSurvey } = survey;
    if (!userId) {
      _createUser({ survey: restSurvey });
    } else {
      _updateSurvey({ survey: restSurvey, userId });
    }
  }, [status, survey, userId]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center relative">
      <DotLottiePlayer
        src={particleData}
        autoplay
        className="fixed left-1/2"
        style={{ transform: "translate(-50%, 0)" }}
      />

      <FadeTitle text={titleText} />
    </main>
  );
};

export default Done;
