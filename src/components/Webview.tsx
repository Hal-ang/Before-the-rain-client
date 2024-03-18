"use client";

import React, { ReactNode } from "react";

import useSetCoordinates from "@/hooks/webview/useSetCoordinates";
import useSetFCMToken from "@/hooks/webview/useSetFCMToken";
import useSetPermissions from "@/hooks/webview/useSetPermissions";
import useUpdateUserTokenMutation from "@/hooks/mutations/useUpdateUserTokenMutation";

const Webview = ({ children }: { children: ReactNode }) => {
  useSetPermissions();
  useSetCoordinates();
  useSetFCMToken();
  useUpdateUserTokenMutation();

  return <>{children}</>;
};

export default Webview;
