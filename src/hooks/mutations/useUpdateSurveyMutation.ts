import { Survey } from "@/api/type";
import { updateSurvey } from "@/api";
import { useMutation } from "@tanstack/react-query";

const useUpdateSurveyMutation = () => {
  return useMutation({
    mutationFn: ({ survey, userId }: { survey: Survey; userId: string }) =>
      updateSurvey(survey, userId)
  });
};

export default useUpdateSurveyMutation;
