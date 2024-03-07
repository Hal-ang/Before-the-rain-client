"use client";

import FadeTitle from "@/components/FadeTitle";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const isFetchedUser = true;
const isFirstUser = true;

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!isFetchedUser || !isFirstUser) return;

    const timeoutID = setTimeout(() => {
      router.push("/onboarding");
    }, 1500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [isFetchedUser, isFirstUser]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <FadeTitle text="반가워요!" />
    </main>
  );
}
