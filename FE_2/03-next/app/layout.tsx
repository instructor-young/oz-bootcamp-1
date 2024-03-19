import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ backgroundColor: "skyblue" }}>
        <header>이것이 헤더다</header>
        {children}
        <footer>이것이 푸터다</footer>
      </body>
    </html>
  );
}
