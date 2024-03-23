"use client";

import React, { ReactNode } from "react";

import useUpdateUserTokenMutation from "@/hooks/mutations/useUpdateUserTokenMutation";
import useWebviewFCMToken from "@/hooks/webview/useWebviewFCMToken";
import useWebviewNotification from "@/hooks/webview/useWebviewNotification";
import useWebviewUserCoords from "@/hooks/webview/useWebviewUserCoords";

const Webview = ({ children }: { children: ReactNode }) => {
  useWebviewNotification();
  useWebviewUserCoords();

  useWebviewFCMToken();
  useUpdateUserTokenMutation();

  return <>{children}</>;
};

export default Webview;
