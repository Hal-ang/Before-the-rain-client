import { updateUserToken } from "@/api";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import useUser from "../useUser";

const useUpdateUserTokenMutation = () => {
  const { fcmToken, id } = useUser();

  const { mutate, data } = useMutation({
    mutationFn: ({ token, id }: { token: string; id: string }) =>
      updateUserToken(token, id)
  });

  useEffect(() => {
    if (!id || !fcmToken) return;
    mutate({ token: fcmToken, id: id.toString() });
  }, [id, fcmToken]);
};

export default useUpdateUserTokenMutation;
