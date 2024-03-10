import { useLayoutEffect, useState } from "react";

const useVisualViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  useLayoutEffect(() => {
    if (!window.visualViewport || !window.visualViewport.height) return;

    const handleResize = () => {
      if (!window.visualViewport || !window.visualViewport.height) return;
      setViewportHeight(window.visualViewport.height);
    };

    handleResize();
    window.visualViewport.addEventListener("resize", handleResize);

    return () => {
      if (!window.visualViewport || !window.visualViewport.height) return;
      window.visualViewport.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportHeight;
};
export default useVisualViewportHeight;
