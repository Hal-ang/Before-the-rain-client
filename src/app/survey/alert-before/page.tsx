"use client";

import BackHeader from "@/components/header/BackHeader";
import React from "react";
import { useRouter } from "next/navigation";

const AlertBefore = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen w-full">
      <BackHeader onClickBack={() => router.back()} />
    </main>
  );
};

export default AlertBefore;
