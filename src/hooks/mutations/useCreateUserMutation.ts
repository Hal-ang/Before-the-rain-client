import { Survey, UserReponse } from "@/api/type";

import { createUser } from "@/api";
import { useMutation } from "@tanstack/react-query";
import useUser from "../useUser";

const useCreateUserMutation = ({
  onSuccess,
  onError
}: {
  onSuccess: (data: UserReponse) => void;
  onError: () => void;
}) => {
  const { fcmToken } = useUser();

  return useMutation({
    mutationFn: ({ survey }: { survey: Survey }) =>
      createUser(survey, fcmToken ?? undefined),
    onSuccess,
    onError
  });
};

export default useCreateUserMutation;
