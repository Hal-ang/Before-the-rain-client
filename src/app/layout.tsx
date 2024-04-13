import "./globals.css";

import * as Sentry from "@sentry/react";

import AuthGuard from "@/components/auth/AuthGuard";
import MSW from "@/components/\bmsw";
import { MY_FONTS } from "@/styles/fonts";
import type { Metadata } from "next";
import Providers from "../components/providers";
import StyledComponentsRegistry from "../../lib/registry";
import Webview from "@/components/Webview";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

export const metadata: Metadata = {
  title: "Before the rain",
  description: "비가 오기 전에 알려 드려요"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${MY_FONTS.className} bg-black`}>
        <StyledComponentsRegistry>
          <AuthGuard>
            <Providers>
              {process.env.NEXT_PUBLIC_API_MOCKING === "enabled" ? (
                <MSW>
                  <Webview>{children}</Webview>
                </MSW>
              ) : (
                <Webview>{children}</Webview>
              )}
            </Providers>
          </AuthGuard>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
