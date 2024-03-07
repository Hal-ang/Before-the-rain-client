"use client";

import { FULL_CENTER_CLASSNAME } from "@/const";
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
    <main className={FULL_CENTER_CLASSNAME}>
      <FadeTitle text="반가워요!" />
    </main>
  );
}
