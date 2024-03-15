"use client";

import { useEffect, useState } from "react";

import FadeTitle from "@/components/FadeTitle";
import { StorageKey } from "@/constants/storage";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isFirstUser, setIsFirstUser] = useState(
    () => localStorage.getItem(StorageKey.UserId) === null
  );

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      router.push(isFirstUser ? "/onboarding" : "/content");
    }, 1500);

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
