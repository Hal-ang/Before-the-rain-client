"use client";

import React, { useState } from "react";

import BackHeader from "@/components/header/BackHeader";
import { CardLayout } from "@/components/layout/card";
import Knowhow from "@/components/content/Knowhow";
import Switch from "@/components/Switch";

const Permission = () => {
  const [agreedPermissions, setAgreedPermissions] = useState<string[]>([]);

  const permissions = [
    { label: "위치 정보 제공 동의", onClick: () => {}, value: "location" },
    {
      label: "푸시 알림 수신 동의",
      onClick: () => {},
      value: "push-notification"
    }
  ];
  return (
    <main className="min-h-screen w-full flex flex-col ">
      <BackHeader text="권한 설정" />

      <section className="grow flex flex-col px-20pxr pt-7pxr">
        <CardLayout state="dark-outline" className="py-6pxr px-20pxr">
          {permissions.map((permission, index) => (
            <div
              key={permission.value}
              className="flex flex-row items-center justify-between py-12pxr  border-b border-light-secondary last:border-none"
            >
              <p className="font-regular text-13pxr text-white leading-17pxr">
                {permission.label}
              </p>
              {/* TODO : API로 교체 */}
              <Switch
                onClick={() =>
                  setAgreedPermissions((prev) => {
                    if (prev.includes(permission.value)) {
                      return prev.filter((p) => p !== permission.value);
                    }
                    return [...prev, permission.value];
                  })
                }
                checked={agreedPermissions.includes(permission.value)}
              />
            </div>
          ))}
        </CardLayout>
        <Knowhow text="동의하지 않을 경우 서비스 이용이 어렵습니다" />
      </section>
    </main>
  );
};

export default Permission;
