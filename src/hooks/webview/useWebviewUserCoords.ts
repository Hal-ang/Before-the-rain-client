import { useCallback, useEffect } from "react";

import { useAtom } from "jotai";
import { userAtom } from "@/atom/user";

const useWebviewUserCoords = () => {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    // 브릿지 수신 함수
    // 위치 권한에 동의한 경우 스위프트의 유저 위치 모니터링 함수 내부에서 자동 호출
    window.updateLocation = (lat: string, lon: string) => {
      console.log(lat, lon, "call updateLocation");
      const coordinates = { lat: Number(lat), lon: Number(lon) };
      if (isNaN(coordinates.lat) || isNaN(coordinates.lon)) {
        console.error("Invalid coordinates, is NaN");
      }

      fetchUserCoords(coordinates);
    };
  }, []);

  const fetchUserCoords = useCallback(
    (coordinates: { lat: number; lon: number }) => {
      const MS_OF_10_MINUTE = 1000 * 60 * 10;
      const now = new Date().getTime();
      const { updatedAt } = user?.coordinates ?? { updatedAt: 0 };

      const alreadyUpdatedCoords = updatedAt
        ? now - updatedAt < MS_OF_10_MINUTE
        : false;

      if (alreadyUpdatedCoords) return;

      setUser({ coordinates: { ...coordinates, updatedAt: now } });
    },
    [user?.coordinates]
  );
};

export default useWebviewUserCoords;
