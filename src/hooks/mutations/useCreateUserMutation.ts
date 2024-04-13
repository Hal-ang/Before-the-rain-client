import { Survey, UserReponse } from "@/api/type";

import { FCMTokenAtom } from "@/atom/webview";
import { createUser } from "@/api";
import { useAtomValue } from "jotai";
import { useMutation } from "@tanstack/react-query";

const useCreateUserMutation = ({
  onSuccess
}: {
  onSuccess: (data: UserReponse) => void;
}) => {
  const fcmToken = useAtomValue(FCMTokenAtom);

  return useMutation({
    mutationFn: ({ survey }: { survey: Survey }) =>
      createUser(survey, fcmToken),
    onSuccess
  });
};

export default useCreateUserMutation;
