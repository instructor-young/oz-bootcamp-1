import { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
}

function Page({ title, children }: PropsWithChildren<PageProps>) {
  return (
    <main className="px-5 py-20">
      {title && (
        <h1 className="mb-10 text-3xl font-bold text-center">{title}</h1>
      )}

      {children}
    </main>
  );
}

export default Page;
