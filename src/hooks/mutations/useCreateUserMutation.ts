import { Survey, UserReponse } from "@/api/type";

import { createUser } from "@/api";
import { useMutation } from "@tanstack/react-query";
import useUser from "../useUser";

const useCreateUserMutation = ({
  onSuccess
}: {
  onSuccess: (data: UserReponse) => void;
}) => {
  const { fcmToken } = useUser();

  return useMutation({
    mutationFn: ({ survey }: { survey: Survey }) =>
      createUser(survey, fcmToken ?? undefined),
    onSuccess
  });
};

export default useCreateUserMutation;
