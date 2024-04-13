"use client";

import React, { ReactNode, useEffect, useMemo } from "react";

import { StorageKey } from "@/constants/storage";
import { useSetAtom } from "jotai";
import { userAtom } from "@/atom/user";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const userId = localStorage.getItem(StorageKey.UserId);

    setUser({ id: userId ? parseInt(userId) : null });
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
