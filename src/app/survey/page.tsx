"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Survey = () => {
  const router = useRouter();
  // TODO : routing, error guard

  useEffect(() => {
    const firstStep = "alert-before";
    router.push(`/survey/${firstStep}`);
  }, []);

  return null;
};

export default Survey;
