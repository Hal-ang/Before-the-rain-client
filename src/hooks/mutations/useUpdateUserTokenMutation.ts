import { useEffect, useMemo } from "react";

import { FCMTokenAtom } from "@/atom/webview";
import { StorageKey } from "@/constants/storage";
import { updateUserToken } from "@/api";
import { useAtomValue } from "jotai";
import { useMutation } from "@tanstack/react-query";

const useUpdateUserTokenMutation = () => {
  const fcmToken = useAtomValue(FCMTokenAtom);
  const userId = useMemo(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(StorageKey.UserId);
  }, []);

  const { mutate } = useMutation({
    mutationFn: ({ token, id }: { token: string; id: string }) =>
      updateUserToken(token, id)
  });

  useEffect(() => {
    if (!userId || !fcmToken) return;
    mutate({ token: fcmToken, id: userId });
  }, [userId, fcmToken]);
};

export default useUpdateUserTokenMutation;
