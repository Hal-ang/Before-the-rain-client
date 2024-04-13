"use client";

import React, { ReactNode, useEffect } from "react";

import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";

const RouterGuard = ({ children }: { children: ReactNode }) => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      router.push(
        !user.id ? "/survey" : user.coordinates ? "/content" : "/permission"
      );
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [user]);

  return <>{children}</>;
};

export default RouterGuard;
