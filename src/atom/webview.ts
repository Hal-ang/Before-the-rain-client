import { atom } from "jotai";

export const userCoordinatesAtom = atom({
  lat: 0,
  lon: 0,
  updatedAt: 0
});
export const enabledNotificationPermissionAtom = atom(false);

export const FCMTokenAtom = atom("");
