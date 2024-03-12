"use client";

import { useState, type PropsWithChildren, useEffect } from "react";

interface Props {}

export default function MSW({ children }: PropsWithChildren<Props>) {
  const [ready, setReady] = useState(false);

  const init = async () => {
    const initMock = await import("../mocks/index");
    await initMock.initMSW();
    setReady(true);
  };

  useEffect(() => {
    if (ready) return;
    init();
  }, [ready]);

  return <>{children}</>;
}
