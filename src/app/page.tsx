"use client";

import { useEffect, useMemo } from "react";

import FadeTitle from "@/components/FadeTitle";
import { StorageKey } from "@/constants/storage";
import { TRANSITION_DURATIN } from "@/constants/duration";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const isFirstUser = useMemo(() => {
    if (typeof window === "undefined") return;

    return localStorage.getItem(StorageKey.UserId) === null;
  }, []);

  useEffect(() => {
    if (isFirstUser === undefined) return;

    const timeoutID = setTimeout(() => {
      router.push(isFirstUser ? "/onboarding" : "/content");
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [isFirstUser]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <FadeTitle text="반가워요!" />
    </main>
  );
}
