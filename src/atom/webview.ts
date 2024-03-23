import { atom } from "jotai";

export const userCoordinatesAtom = atom({
  // TODO : 심사 통과 시 0으로 수정 예정
  lat: 37.59996944,
  lon: 126.9312417,
  updatedAt: 0
});
export const enabledNotificationPermissionAtom = atom(false);

export const FCMTokenAtom = atom("");
