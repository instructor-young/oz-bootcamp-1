import Header from "@/app/(root)/_components/Header";
import ReactQueryProvider from "@/react-query/client.react-query";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <div>
        <Header />
        {children}
      </div>
    </ReactQueryProvider>
  );
}

export default RootLayout;
