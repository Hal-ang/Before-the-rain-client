import { atom } from "jotai";

export const INITIAL_USER = {
  coordinates: {
    // TODO : 임수 수정
    lat: 37.59996944,
    lon: 126.9312417,
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
