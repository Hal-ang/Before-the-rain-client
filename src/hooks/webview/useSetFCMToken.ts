import { useEffect, useLayoutEffect } from "react";

import { FCMTokenAtom } from "@/atom/webview";
import { useSetAtom } from "jotai";

const useSetFCMToken = () => {
  const setFCMToken = useSetAtom(FCMTokenAtom);

  useLayoutEffect(() => {
    window.updateFCMToken = (token: string) => {
      console.log(`FCM Token: ${token}`);
      setFCMToken(token);
    };
  }, []);

  useEffect(() => {
    if (!window?.webkit?.messageHandlers) return;
    window.webkit.messageHandlers.nativeApp.postMessage("getFCMToken");
  }, []);
};

export default useSetFCMToken;
