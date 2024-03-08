import React, { useEffect, useState } from "react";

import { useDebounce } from "./useDebounce";

const useRipple = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  const [ripples, setRipples] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    if (ref.current) {
      const $elem = ref.current;

      const clickHandler = (e: MouseEvent) => {
        const { left, top } = $elem.getBoundingClientRect();
        const _left = e.clientX - left;
        const _top = e.clientY - top;
        const height = $elem.clientHeight;
        const width = $elem.clientWidth;
        const diameter = Math.max(width, height);
        setRipples([
          ...ripples,
          {
            top: _top - diameter / 2,
            left: _left - diameter / 2,
            height: Math.max(width, height),
            width: Math.max(width, height)
          }
        ]);
      };

      $elem.addEventListener("click", clickHandler);

      return () => {
        $elem.removeEventListener("click", clickHandler);
      };
    }
  }, [ref, ripples]);

  const _debounced = useDebounce(ripples, 1000);

  useEffect(() => {
    if (_debounced.length) {
      setRipples([]);
    }
  }, [_debounced.length]);

  return ripples?.map((style, i) => {
    return (
      <span
        key={i}
        style={{
          ...style,
          position: "absolute",
          backgroundColor: "#FFFFFF",
          opacity: "25%",
          transform: "scale(0)",
          animation: "ripple 600ms linear",
          borderRadius: "50%"
        }}
      />
    );
  });
};

export default useRipple;
