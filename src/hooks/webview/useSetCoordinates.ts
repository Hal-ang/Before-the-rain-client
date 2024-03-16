import { useEffect, useLayoutEffect } from "react";

import { useSetAtom } from "jotai";
import { userCoordinatesAtom } from "@/atom/webview";

const useSetCoordinates = () => {
  const setUserCoordinates = useSetAtom(userCoordinatesAtom);

  useLayoutEffect(() => {
    window.updateLocation = (lat: string, lon: string) => {
      const coordinates = { lat: Number(lat), lon: Number(lon) };
      if (isNaN(coordinates.lat) || isNaN(coordinates.lon)) {
        console.error("Invalid coordinates, is NaN");
      }
      setUserCoordinates(coordinates);
    };
  }, []);

  useEffect(() => {
    if (!window?.webkit?.messageHandlers) return;
    window.webkit.messageHandlers?.nativeApp.postMessage("getUserCoordinates");
  }, []);
};

export default useSetCoordinates;
