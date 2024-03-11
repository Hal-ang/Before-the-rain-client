"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

type BooleanString = "true" | "false";
const WebviewContext = createContext<
  | {
      coordinate: { latitude: number; longitude: number };
      enabledLocationPermission: boolean;
      enabledNotificationPermission: boolean;
    }
  | undefined
>({
  coordinate: { latitude: 0, longitude: 0 },
  enabledLocationPermission: false,
  enabledNotificationPermission: false
});

export const useWebviewContext = () => {
  const context = useContext(WebviewContext);
  if (!context) {
    throw new Error("useWebviewContext must be used within a WebviewProvider");
  }
  return context;
};

const Webview = ({ children }: { children: ReactNode }) => {
  const [enabledLocationPermission, setEnabledLocationPermission] =
    useState<BooleanString>("false");
  const [enabledNotificationPermission, setEnabledNotificationPermission] =
    useState<BooleanString>("false");
  const [coordinate, setCoordinate] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 0, longitude: 0 });

  useEffect(() => {
    window.updateLocationPermissionEnabled = (enabled: BooleanString) => {
      console.log(`Location permission enabled: ${enabled}`);
      setEnabledLocationPermission(enabled);
    };

    window.updateNotificationPermissionEnabled = (enabled: BooleanString) => {
      setEnabledNotificationPermission(enabled);
    };

    // 위치 정보 업데이트 함수
    window.updateLocation = (latitude: number, longitude: number) => {
      console.log(`Location updated: ${latitude}, ${longitude}`);
      setCoordinate({ latitude, longitude });
    };
  }, []);

  useEffect(() => {
    if (window?.webkit?.messageHandlers) {
      window.webkit.messageHandlers.nativeApp.postMessage(
        "updateLocationPermissionEnabled"
      );
      window.webkit.messageHandlers.nativeApp.postMessage(
        "updateNotificationPermissionEnabled"
      );
      window.webkit.messageHandlers.nativeApp.postMessage(
        "startUpdatingLocation"
      );
    }
  }, []);

  return (
    <WebviewContext.Provider
      value={{
        coordinate,
        enabledLocationPermission: Boolean(enabledLocationPermission),
        enabledNotificationPermission: Boolean(enabledNotificationPermission)
      }}
    >
      {children}
    </WebviewContext.Provider>
  );
};

export default Webview;
