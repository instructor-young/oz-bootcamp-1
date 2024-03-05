import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "발랑",
  description: "세상에 둘도 없는 명품 쇼핑몰",
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
