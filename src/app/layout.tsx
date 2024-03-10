import "./globals.css";

import MSW from "@/components/\bmsw";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
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
        <MSW>{children}</MSW>
      </body>
    </html>
  );
}
