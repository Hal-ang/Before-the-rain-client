import "./globals.css";

import AuthGuard from "@/components/auth/AuthGuard";
import MSW from "@/components/\bmsw";
import { MY_FONTS } from "@/styles/fonts";
import type { Metadata } from "next";
import Providers from "../components/providers";
import StyledComponentsRegistry from "../../lib/registry";
import Webview from "@/components/Webview";

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
