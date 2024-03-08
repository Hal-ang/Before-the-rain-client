import { DarkOutlineCard } from "../layout/card";
import Image from "next/image";
import React from "react";

interface SummaryCardProps {
  desc: string;
  title: string;
  rainGage: number;
  imageUrl: string;
}
const SummaryCard = ({ desc, title, rainGage, imageUrl }: SummaryCardProps) => {
  return (
    <DarkOutlineCard className="flex flex-row items-center py-34pxr px-12pxr gap-x-9pxr">
      <Image
        className="flex floating"
        style={{ width: "35%" }}
        src={imageUrl}
        alt="rain-emoji"
        width={131}
        height={104}
      />
      <div className="text-white flex flex-col grow">
        <p className="font-medium text-15pxr">{desc}</p>
        <p className="mt-2pxr font-bold text-25pxr">{title}</p>
        <p className="mt-12pxr text-light-secondary font-regular text-10pxr leading-11pxr">
          강수 확률 {rainGage * 100}%
        </p>
      </div>
    </DarkOutlineCard>
  );
};

export default SummaryCard;
