import { atom } from "jotai";

export const INITIAL_USER = {
  coordinates: {
    lat: 0,
    lon: 0,
    updatedAt: 0
  },
  id: null,
  fcmToken: null,
  enabledNotificationPermission: false
};

interface UserAtom {
  coordinates: null | {
    lat: number;
    lon: number;
    updatedAt: number;
  };
  id: number | null;
  fcmToken: string | null;
  enabledNotificationPermission: boolean;
}
const _userAtom = atom<UserAtom>(INITIAL_USER);

export const userAtom = atom(
  (get) => get(_userAtom),
  (get, set, _user: Partial<UserAtom>) => {
    const user = get(_userAtom);
    set(_userAtom, { ...user, ..._user });
  }
);
