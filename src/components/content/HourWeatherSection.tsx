import { Clothes } from "@/constants/mockup";
import Image from "next/image";
import Label from "../Label";
import React from "react";

interface HourWeatherSectionProps {
  rainGage: number;
  iconName: string;
  clothes: Clothes[];
  hour: string;
  temp: number;
}
const HourWeatherSection = ({
  rainGage,
  iconName,
  clothes,
  hour,
  temp
}: HourWeatherSectionProps) => {
  return (
    <section className="text-white flex flex-row items-center last:border-none border-b border-light-secondary mb-3pxr pt-6pxr pb-10pxr px-15pxr gap-x-10pxr">
      <div className="flex-none flex flex-col items-center w-30pxr">
        <p className="font-medium text-10pxr">{hour}시</p>
        <p className="mt-2pxr font-regular text-9pxr text-light-secondary">
          {rainGage * 100}%
        </p>
      </div>
      <Image
        src={`https://openweathermap.org/img/wn/${iconName}@2x.png`}
        alt=""
        width={50}
        height={50}
        priority={true}
      />
      <div className="flex flex-col justify-center gap-y-3pxr">
        <p className="font-regular text-13pxr leading-17pxr">{temp}°</p>
        <div className="mt-3pxr flex flex-row flex-wrap items-center justify-start gap-x-6pxr gap-y-4pxr">
          {(clothes ?? []).map((cloth) => (
            <Label key={cloth.id} text={cloth.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HourWeatherSection;
