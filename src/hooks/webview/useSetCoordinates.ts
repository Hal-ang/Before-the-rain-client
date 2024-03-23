import { useLayoutEffect } from "react";
import { useSetAtom } from "jotai";
import { userCoordinatesAtom } from "@/atom/webview";

const useSetCoordinates = () => {
  const setUserCoordinates = useSetAtom(userCoordinatesAtom);

  useLayoutEffect(() => {
    // 브릿지 수신 함수
    // 위치 권한에 동의한 경우 스위프트의 유저 위치 모니터링 함수 내부에서 자동 호출
    window.updateLocation = (lat: string, lon: string) => {
      console.log(lat, lon, "call updateLocation");
      const coordinates = { lat: Number(lat), lon: Number(lon) };
      if (isNaN(coordinates.lat) || isNaN(coordinates.lon)) {
        console.error("Invalid coordinates, is NaN");
      }

      setUserCoordinates((prev) => {
        const MS_OF_30_MINUTE = 1000 * 60 * 30;
        const now = new Date().getTime();
        const alreadyUpdatedCoords = now - prev.updatedAt < MS_OF_30_MINUTE;
        if (alreadyUpdatedCoords) return prev;
        return { ...coordinates, updatedAt: now };
      });
    };
  }, []);
};

export default useSetCoordinates;
