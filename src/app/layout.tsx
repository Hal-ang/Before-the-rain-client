import "./globals.css";

import AuthGuard from "@/components/auth/AuthGuard";
import MSW from "@/components/\bmsw";
import type { Metadata } from "next";
import Providers from "../components/providers";
import StyledComponentsRegistry from "../../lib/registry";
import Webview from "@/components/Webview";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Before the rain",
  description: "비가 오기 전에 알려 드려요"
};

const myFont = localFont({
  src: [
    {
      path: "../fonts/SpoqaHanSansNeo-Bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Regular.woff2",
      weight: "400",
      style: "normal"
    }
  ],
  display: "swap",
  preload: true
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${myFont.className} bg-black`}>
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
