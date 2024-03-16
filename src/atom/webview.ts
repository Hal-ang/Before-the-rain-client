import { atom } from "jotai";

export const userCoordinatesAtom = atom({ lat: 37.59996944, lon: 126.9312417 });
export const enabledLocationPermissionAtom = atom(false);
export const enabledNotificationPermissionAtom = atom(false);
export const FCMTokenAtom = atom("");
