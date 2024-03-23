import { useEffect, useLayoutEffect } from "react";

import { FCMTokenAtom } from "@/atom/webview";
import { useSetAtom } from "jotai";

const useSetFCMToken = () => {
  const setFCMToken = useSetAtom(FCMTokenAtom);

  useLayoutEffect(() => {
    // 브릿지 수신 함수
    window.updateFCMToken = (token: string) => {
      console.log(`FCM Token: ${token}`);
      setFCMToken(token);
    };
  }, []);

  useEffect(() => {
    // 브릿지 발신 함수
    if (!window?.webkit?.messageHandlers) return;
    window.webkit.messageHandlers.nativeApp.postMessage("getFCMToken");
  }, []);
};

export default useSetFCMToken;
