type Coordinates = "getUserCoordinates";
type LocationPermission =
  | "updateLocationPermissionEnabled"
  | "requestLocationPermission";
type NotificationPermission =
  | "requestNotificationPermission"
  | "updateNotificationPermissionEnabled";

declare global {
  interface Window {
    updateLocationPermissionEnabled: (enabled: "true" | "false") => void;
    updateNotificationPermissionEnabled: (enabled: "true" | "false") => void;
    updateLocation: (latitude: string, longitude: string) => void;
    webkit: {
      messageHandlers?: {
        nativeApp: {
          postMessage: (
            message: Coordinates | LocationPermission | NotificationPermission
          ) => void;
        };
      };
    };
  }
}
export const webkit = window.webkit;
