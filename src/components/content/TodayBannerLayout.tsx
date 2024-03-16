import { CardLayout } from "../layout/card";
import Image from "next/image";
import React from "react";

interface TodayBannerLayoutProps {
  desc: string;
  title: string;
  rainGage: number;
  imageUrl: string;
}
const TodayBannerLayout = ({
  desc,
  title,
  rainGage,
  imageUrl
}: TodayBannerLayoutProps) => {
  return (
    <CardLayout
      state="dark-outline"
      className="flex flex-row items-center py-34pxr px-12pxr gap-x-9pxr"
    >
      <Image
        className="flex floating"
        style={{ width: "35%" }}
        src={imageUrl}
        alt="rain-emoji"
        width={131}
        height={104}
        priority={true}
      />
      <div className="text-white flex flex-col grow">
        <p className="font-medium text-15pxr">{desc}</p>
        <p className="mt-2pxr font-bold text-25pxr">{title}</p>
        <p className="mt-12pxr text-light-secondary font-regular text-10pxr leading-11pxr">
          금일 최고 강수 확률 {rainGage * 100}%
        </p>
      </div>
    </CardLayout>
  );
};

export default TodayBannerLayout;
