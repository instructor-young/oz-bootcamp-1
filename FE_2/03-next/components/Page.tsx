import { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
}

function Page({ title, children }: PropsWithChildren<PageProps>) {
  return (
    <main style={{ padding: "2rem" }}>
      {title && (
        <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: "2rem" }}>
          {title}
        </h1>
      )}

      {children}
    </main>
  );
}

export default Page;
