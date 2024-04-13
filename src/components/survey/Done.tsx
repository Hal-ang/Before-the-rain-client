"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import FadeTitle from "../FadeTitle";
import Flex from "../Flex";

const particleData = require("/public/particle.lottie");

const Done = ({ title }: { title: string }) => {
  return (
    <Flex justify="center" align="center" className="min-h-screen w-full">
      <DotLottiePlayer
        src={particleData}
        autoplay
        className="fixed left-1/2"
        style={{ transform: "translate(-50%, 0)" }}
      />

      <FadeTitle text={title} />
    </Flex>
  );
};

export default Done;
