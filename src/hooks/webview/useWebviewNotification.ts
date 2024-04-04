import { useEffect, useLayoutEffect } from "react";

import { BooleanStringParam } from "../../../global";
import { enabledNotificationPermissionAtom } from "../../atom/webview";
import { useSetAtom } from "jotai";

const useWebviewNotification = () => {
  const setEnabledNotificationPermission = useSetAtom(
    enabledNotificationPermissionAtom
  );

  useEffect(() => {
    // 브릿지 수신 함수
    // fetchNotiPermissionEnabled 함수 호출 후 응답을 반환 받는 함수
    window.updateNotificationPermissionEnabled = (
      enabled: BooleanStringParam
    ) => {
      console.log(`Notification permission enabled: ${enabled}`);
      setEnabledNotificationPermission(enabled === "true");
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
