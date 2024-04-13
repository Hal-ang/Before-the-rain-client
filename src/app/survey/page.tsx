"use client";

import React, { useCallback } from "react";

import Done from "@/components/survey/Done";
import ErrorFallback from "@/components/crossConcern/ErrorFallback";
import { StorageKey } from "@/constants/storage";
import Survey from "@/components/survey/Survey";
import { Survey as SurveyType } from "@/api/type";
import SuspenseFallback from "@/components/crossConcern/SuspenseFallback";
import { updateSurvey } from "@/api";
import useCreateUserMutation from "@/hooks/mutations/useCreateUserMutation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";

const SurveyPage = () => {
  const user = useUser();
  const router = useRouter();

  const {
    mutate: _createUser,
    isPending: isCreating,
    isSuccess: isCreatingSuccess,
    isError: isCreatingError
  } = useCreateUserMutation({
    onSuccess(data) {
      if (data.id) {
        localStorage.setItem(StorageKey.UserId, `${data.id}`);
      }
      router.push("/content");
    }
  });

  const {
    mutate: _updateSurvey,
    isPending: isUpdating,
    isError: isUpdatingError
  } = useMutation({
    mutationFn: ({ survey }: { survey: SurveyType }) => updateSurvey(survey),
    onSuccess() {
      router.push("/content");
    }
  });

  const handleSubmit = useCallback(
    (survey: SurveyType) => {
      if (!user?.id) {
        _createUser({ survey });
      } else {
        _updateSurvey({ survey });
      }
    },
    [user?.id]
  );

  return (
    <ErrorFallback
      hasError={isCreatingError || isUpdatingError}
      fallbackComponent={
        <Done title={`문제가 발생했어요\n 앱을 다시 시작해주세요`} />
      }
    >
      <SuspenseFallback
        loading={isCreating || isUpdating}
        fallbackComponent={
          <Done title={isCreatingSuccess ? "환영합니다" : "수정 되었습니다!"} />
        }
      >
        <Survey onSubmit={handleSubmit} />
      </SuspenseFallback>
    </ErrorFallback>
  );
};

export default SurveyPage;
