import "./globals.css";

import MSW from "@/components/\bmsw";
import type { Metadata } from "next";
import Providers from "../components/providers";
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
        <Providers>
          <MSW>
            <Webview>{children}</Webview>
          </MSW>
        </Providers>
      </body>
    </html>
  );
}
