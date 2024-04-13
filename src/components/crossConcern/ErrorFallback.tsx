import React, { PropsWithChildren } from "react";

import Fallback from "./Fallback";

interface ErrorFallbackProps {
  hasError: boolean;
  fallbackComponent?: React.ReactNode;
}
const ErrorFallback = ({
  hasError,
  fallbackComponent,
  children
}: PropsWithChildren<ErrorFallbackProps>) => {
  return (
    <Fallback fallbackComponent={hasError ? fallbackComponent : undefined}>
      {children}
    </Fallback>
  );
};

export default ErrorFallback;
