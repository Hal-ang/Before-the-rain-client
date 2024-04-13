"use client";

import React, { ReactNode, useEffect, useMemo } from "react";

import { StorageKey } from "@/constants/storage";
import { useSetAtom } from "jotai";
import { userAtom } from "@/atom/user";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const setUser = useSetAtom(userAtom);

  const userId =
    typeof window === "undefined"
      ? null
      : localStorage.getItem(StorageKey.UserId);

  useEffect(() => {
    setUser({ id: userId ? parseInt(userId) : null });
  }, [userId]);

  return <>{children}</>;
};

export default AuthGuard;
