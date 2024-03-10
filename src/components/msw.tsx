// app/components/msw.tsx
"use client";

import { useState, type PropsWithChildren, useEffect } from "react";
const isDev = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

interface Props {}

export default function MSW({ children }: PropsWithChildren<Props>) {
  const [ready, setReady] = useState(false);

  const init = async () => {
    if (isDev) {
      const initMock = await import("../mocks/index");
      await initMock.initMSW();
      setReady(true);
    }
  };

  useEffect(() => {
    if (ready) return;
    init();
  }, [ready]);

  if (!isDev) return null;

  return <>{children}</>;
}
