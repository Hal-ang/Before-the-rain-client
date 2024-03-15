"use client";

import FadeTitle from "@/components/FadeTitle";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const isFetchedUser = true;
const isFirstUser = true;

export default function Home() {
  const router = useRouter();

  // TODO : API 연결 완료 시, 자동 redirect 코드로 변경
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

// 진입, 
// fcm 토큰을 가져온다 (웹뷰)
// 