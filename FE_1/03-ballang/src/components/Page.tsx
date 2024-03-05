import { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
}

function Page({ children, title }: PropsWithChildren<PageProps>) {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="mb-10 text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
}

export default Page;
