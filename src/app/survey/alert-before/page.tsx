import Back from "@/assets/back_arrow.svg";
import Header from "@/components/Header";
import React from "react";

const AlertBefore = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <Back />
      <Header LeftIcon={Back} />
    </main>
  );
};

export default AlertBefore;
