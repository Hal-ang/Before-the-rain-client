"use client";

import React, { useMemo } from "react";

import BackHeader from "@/components/header/BackHeader";
import { CardLayout } from "@/components/layout/card";
import Knowhow from "@/components/content/Knowhow";
import Switch from "@/components/Switch";
import useUser from "@/hooks/useUser";

const Permission = () => {
  const user = useUser();

  const enabledLocationPermission = useMemo(
    () =>
      !!(
        user?.coordinates?.lat &&
        user?.coordinates?.lon &&
        user?.coordinates?.updatedAt
      ),
    [user?.coordinates]
  );

  const permissions = useMemo(
    () => [
      {
        label: "위치 정보 제공 동의",
        onClick: () => {
          // denied 상태가 아닌 경우 동작하는 브릿지 발신 함수
          window?.webkit?.messageHandlers?.nativeApp.postMessage(
            "requestLocationPermission"
          );
        },
        isAgreed: enabledLocationPermission
      },
      {
        label: "푸시 알림 수신 동의",
        onClick: () => {
          // denied 상태가 아닌 경우 동작하는 브릿지 발신 함수
          window?.webkit?.messageHandlers?.nativeApp.postMessage(
            "requestNotificationPermission"
          );
        },
        isAgreed: user.enabledNotificationPermission
      }
    ],
    [user.enabledNotificationPermission, enabledLocationPermission]
  );

  return (
    <main className="min-h-screen w-full flex flex-col ">
      <BackHeader text="권한 확인" />
      <section className="grow flex flex-col px-20pxr pt-7pxr">
        <CardLayout state="dark-outline" className="py-6pxr px-20pxr">
          {permissions.map((permission) => (
            <div
              key={permission.label}
              className="flex flex-row items-center justify-between py-12pxr  border-b border-light-secondary last:border-none"
            >
              <p className="font-regular text-13pxr text-white leading-17pxr">
                {permission.label}
              </p>
              <Switch
                onClick={permission.onClick}
                checked={permission.isAgreed}
              />
            </div>
          ))}
        </CardLayout>
        <Knowhow text="동의하지 않는 경우 서비스 이용이 어렵습니다" />
        <Knowhow text="권한 동의는 디바이스 설정 -> 비가 오기 전에 -> 위치 권한을 통해 가능합니다" />
      </section>
    </main>
  );
};

export default Permission;
