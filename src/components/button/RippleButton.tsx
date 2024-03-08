import { ButtonHTMLAttributes, ReactNode, useRef } from "react";

import useRipple from "@/hooks/useRipple";

interface RippleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
  delay?: number;
}
const RippleButton = ({
  // ripple duration default is 600ms
  delay = 600,
  onClick,
  children,
  ...props
}: RippleProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ripples = useRipple(buttonRef);

  return (
    <button
      ref={buttonRef}
      {...props}
      style={{ position: "relative", overflow: "hidden" }}
      onClick={() => {
        setTimeout(
          () => {
            onClick();
          },
          delay === 0 ? 0 : delay / 3
        );
      }}
    >
      {children}
      {ripples}
    </button>
  );
};

export default RippleButton;
