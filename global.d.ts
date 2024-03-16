export type BooleanStringParam = "true" | "false";

type Coordinates = "getUserCoordinates";
type FCMToken = "getFCMToken";
type LocationPermission =
  | "updateLocationPermissionEnabled"
  | "requestLocationPermission";
type NotificationPermission =
  | "requestNotificationPermission"
  | "updateNotificationPermissionEnabled";

declare global {
  interface Window {
    updateLocationPermissionEnabled: (enabled: BooleanStringParam) => void;
    updateNotificationPermissionEnabled: (enabled: BooleanStringParam) => void;
    updateLocation: (lat: string, lon: string) => void;
    updateFCMToken: (token: string) => void;
    webkit: {
      messageHandlers?: {
        nativeApp: {
          postMessage: (
            message:
              | FCMToken
              | Coordinates
              | LocationPermission
              | NotificationPermission
          ) => void;
        };
      };
    };
  }
}
export const webkit = window.webkit;
