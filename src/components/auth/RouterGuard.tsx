"use client";

import React, { ReactNode, useEffect, useMemo } from "react";

import { StorageKey } from "@/constants/storage";
import { useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { userCoordinatesAtom } from "@/atom/webview";

const RouterGuard = ({ children }: { children: ReactNode }) => {
  const isFirstUser = useMemo(() => {
    if (typeof window === "undefined") return;

    return localStorage.getItem(StorageKey.UserId) === null;
  }, []);

  const router = useRouter();
  const coords = useAtomValue(userCoordinatesAtom);

  useEffect(() => {
    if (isFirstUser === undefined) return;

    const timeoutID = setTimeout(() => {
      router.push(
        isFirstUser
          ? "/onboarding"
          : coords.lat && coords.lon
          ? "/content"
          : "/permission"
      );
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [isFirstUser, coords.lat, coords.lon]);

  return <>{children}</>;
};

export default RouterGuard;
