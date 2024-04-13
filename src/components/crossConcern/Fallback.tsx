import React, { PropsWithChildren, ReactNode } from "react";

interface FallbackProps {
  fallbackComponent?: ReactNode;
}
const Fallback = ({
  children,
  fallbackComponent
}: PropsWithChildren<FallbackProps>) => {
  if (fallbackComponent) return fallbackComponent;
  return <>{children}</>;
};

export default Fallback;
