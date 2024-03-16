import {
  enabledLocationPermissionAtom,
  enabledNotificationPermissionAtom
} from "@/atom/webview";
import { useEffect, useLayoutEffect } from "react";

import { BooleanStringParam } from "../../../global";
import { useSetAtom } from "jotai";

const useSetPermissions = () => {
  const setEnabledLocationPermission = useSetAtom(
    enabledLocationPermissionAtom
  );
  const setEnabledNotificationPermission = useSetAtom(
    enabledNotificationPermissionAtom
  );

  useLayoutEffect(() => {
    window.updateLocationPermissionEnabled = (enabled: BooleanStringParam) => {
      console.log(`Location permission enabled: ${enabled}`);
      setEnabledLocationPermission(Boolean(enabled));
    };

    window.updateNotificationPermissionEnabled = (
      enabled: BooleanStringParam
    ) => {
      console.log(`Notification permission enabled: ${enabled}`);
      setEnabledNotificationPermission(Boolean(enabled));
    };
  }, []);

  useEffect(() => {
    if (!window?.webkit?.messageHandlers) return;

    window.webkit.messageHandlers.nativeApp.postMessage(
      "updateLocationPermissionEnabled"
    );
    window.webkit.messageHandlers.nativeApp.postMessage(
      "updateNotificationPermissionEnabled"
    );
  }, []);
};

export default useSetPermissions;
