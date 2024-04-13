import { Survey } from "@/api/type";
import { updateSurvey } from "@/api";
import { useMutation } from "@tanstack/react-query";

const useUpdateSurveyMutation = () => {
  return useMutation({
    mutationFn: ({ survey }: { survey: Survey }) => updateSurvey(survey)
  });
};

export default useUpdateSurveyMutation;
