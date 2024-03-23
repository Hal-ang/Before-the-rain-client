export type BooleanStringParam = "true" | "false";

type FCMToken = "getFCMToken";
type LocationPermission = "requestLocationPermission";
type NotificationPermission =
  | "requestNotificationPermission"
  | "updateNotificationPermissionEnabled";

declare global {
  interface Window {
    /** 스위프트 푸시 알림 권한 수신용 */
    updateNotificationPermissionEnabled: (enabled: BooleanStringParam) => void;

    /** 스위프트 위치 정보 수신용 */
    updateLocation: (lat: string, lon: string) => void;

    /** 스위프트 fcm토큰 수신용 */
    updateFCMToken: (token: string) => void;
    webkit: {
      messageHandlers?: {
        nativeApp: {
          postMessage: (
            /** 스위프트 함수 호출을 위한 브릿지 메소드 */
            message: FCMToken | LocationPermission | NotificationPermission
          ) => void;
        };
      };
    };
  }
}
export const webkit = window.webkit;
