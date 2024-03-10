import { ButtonHTMLAttributes, ReactNode, useRef } from "react";

import { RIPPLE_DURATION } from "@/constants/duration";
import useRipple from "@/hooks/useRipple";

export interface RippleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  delay?: number;
  onRippleEndClick?: () => void;
}
const RippleButton = ({
  // ripple duration default is 600ms
  delay = RIPPLE_DURATION,
  onClick,
  onRippleEndClick,
  children,
  ...props
}: RippleButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ripples = useRipple(buttonRef);

  return (
    <button
      ref={buttonRef}
      {...props}
      style={{ position: "relative", overflow: "hidden" }}
      onClick={() => {
        onClick && onClick();

        if (onRippleEndClick) {
          setTimeout(() => {
            onRippleEndClick();
          }, delay);
        }
      }}
    >
      {children}
      {ripples}
    </button>
  );
};

export default RippleButton;
