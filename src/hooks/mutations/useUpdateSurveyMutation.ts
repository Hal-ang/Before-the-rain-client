import { Survey } from "@/api/type";
import { updateSurvey } from "@/api";
import { useMutation } from "@tanstack/react-query";
import useUser from "../useUser";

const useUpdateSurveyMutation = () => {
  const user = useUser();
  return useMutation({
    mutationFn: ({ survey }: { survey: Survey }) =>
      updateSurvey(survey, String(user.id))
  });
};

export default useUpdateSurveyMutation;
