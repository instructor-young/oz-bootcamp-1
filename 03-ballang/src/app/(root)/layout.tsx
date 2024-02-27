import Header from "@/app/(root)/_components/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <footer className="border-t">푸터임</footer>
    </div>
  );
}

export default RootLayout;
