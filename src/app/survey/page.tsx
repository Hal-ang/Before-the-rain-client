"use client";

import { SURVEY_INITIAL_STATE, surveyAtom } from "@/atom/survey";

import React from "react";
import { StorageKey } from "@/constants/storage";
import Survey from "@/components/survey/Survey";
import useCreateUserMutation from "@/hooks/mutations/useCreateUserMutation";
import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";

const SurveyPage = () => {
  const setSurvey = useSetAtom(surveyAtom);
  const router = useRouter();

  const {
    mutate: _createUser,
    status,
    isPending: isCreating,
    isSuccess: isCreatingSuccess
  } = useCreateUserMutation({
    onSuccess(data) {
      setSurvey(SURVEY_INITIAL_STATE);
      if (data.id) {
        localStorage.setItem(StorageKey.UserId, `${data.id}`);
      }
      router.push("/content");
    }
  });

  return <Survey onSubmit={() => {}} />;
};

export default SurveyPage;
