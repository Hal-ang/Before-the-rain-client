import { useEffect, useLayoutEffect } from "react";

import { useSetAtom } from "jotai";
import { userAtom } from "@/atom/user";

const useWebviewFCMToken = () => {
  const setUser = useSetAtom(userAtom);

  useLayoutEffect(() => {
    // 브릿지 수신 함수
    window.updateFCMToken = (token: string) => {
      console.log(`FCM Token: ${token}`);
      setUser({ fcmToken: token });
    };
  }, []);

  useEffect(() => {
    // 브릿지 발신 함수
    if (!window?.webkit?.messageHandlers) return;
    window.webkit.messageHandlers.nativeApp.postMessage("getFCMToken");
  }, []);
};

export default useWebviewFCMToken;
