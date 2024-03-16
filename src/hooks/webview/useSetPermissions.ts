import React, { useEffect, useLayoutEffect } from "react";
import {
  enabledLocationPermissionAtom,
  enabledNotificationPermissionAtom
} from "@/atom/webview";

import { useSetAtom } from "jotai";

type BooleanString = "true" | "false";

const useSetPermissions = () => {
  const setEnabledLocationPermission = useSetAtom(
    enabledLocationPermissionAtom
  );
  const setEnabledNotificationPermission = useSetAtom(
    enabledNotificationPermissionAtom
  );

  useLayoutEffect(() => {
    window.updateLocationPermissionEnabled = (enabled: BooleanString) => {
      console.log(`Location permission enabled: ${enabled}`);
      setEnabledLocationPermission(Boolean(enabled));
    };

    window.updateNotificationPermissionEnabled = (enabled: BooleanString) => {
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
