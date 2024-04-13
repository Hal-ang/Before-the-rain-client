import React, { PropsWithChildren } from "react";

import Fallback from "./Fallback";

interface SuspenseFallbackProps {
  fallbackComponent?: React.ReactNode;
  loading: boolean;
}
const SuspenseFallback = ({
  fallbackComponent,
  loading,
  children
}: PropsWithChildren<SuspenseFallbackProps>) => {
  return (
    <Fallback fallbackComponent={loading ? fallbackComponent : undefined}>
      {children}
    </Fallback>
  );
};

export default SuspenseFallback;
