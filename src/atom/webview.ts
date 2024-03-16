import { atom } from "jotai";

export const userCoordinatesAtom = atom({ lat: 37.5, lon: 127.0 });
export const enabledLocationPermissionAtom = atom(false);
export const enabledNotificationPermissionAtom = atom(false);
export const FCMTokenAtom = atom("");
