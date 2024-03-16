"use client";

import React, { ReactNode } from "react";

import useSetCoordinates from "@/hooks/webview/useSetCoordinates";
import useSetPermissions from "@/hooks/webview/useSetPermissions";

const Webview = ({ children }: { children: ReactNode }) => {
  useSetPermissions();
  useSetCoordinates();

  return <>{children}</>;
};

export default Webview;
