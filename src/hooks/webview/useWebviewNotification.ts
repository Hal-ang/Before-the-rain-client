import { useEffect, useLayoutEffect } from "react";

import { BooleanStringParam } from "../../../global";
import { useSetAtom } from "jotai";
import { userAtom } from "@/atom/user";

const useWebviewNotification = () => {
  const setUser = useSetAtom(userAtom);

  useLayoutEffect(() => {
    // 브릿지 수신 함수
    // fetchNotiPermissionEnabled 함수 호출 후 응답을 반환 받는 함수
    window.updateNotificationPermissionEnabled = (
      enabled: BooleanStringParam
    ) => {
      console.log(`Notification permission enabled: ${enabled}`);
      setUser({ enabledNotificationPermission: enabled === "true" });
    };
  }, []);

  useEffect(() => {
    // 브릿지 발신 함수
    const fetchNotiPermissionEnabled = () => {
      if (!window?.webkit?.messageHandlers) return;
      window.webkit.messageHandlers.nativeApp.postMessage(
        "updateNotificationPermissionEnabled"
      );
    };
    fetchNotiPermissionEnabled();

    window.addEventListener("visibilitychange", fetchNotiPermissionEnabled);
  }, []);
};

export default useWebviewNotification;
