"use client";

import { useEffect, useMemo } from "react";

import FadeTitle from "@/components/FadeTitle";
import { StorageKey } from "@/constants/storage";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { userCoordinatesAtom } from "@/atom/webview";

export default function Home() {
  const router = useRouter();

  const isFirstUser = useMemo(() => {
    if (typeof window === "undefined") return;

    return localStorage.getItem(StorageKey.UserId) === null;
  }, []);

  const { lat, lon } = useAtomValue(userCoordinatesAtom);

  useEffect(() => {
    if (isFirstUser === undefined) return;

    const timeoutID = setTimeout(() => {
      router.push(
        isFirstUser ? "/onboarding" : lat && lon ? "/content" : "/permission"
      );
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [isFirstUser, lat, lon]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <FadeTitle text="반가워요!" />
    </main>
  );
}
