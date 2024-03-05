import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
}

function Page({ title, children }: PropsWithChildren<PageProps>) {
  return (
    <div id="page">
      <h1 style={{ fontSize: 21, fontWeight: 700, padding: "32px 0 16px" }}>
        {title}
      </h1>

      {children}
    </div>
  );
}

export default Page;
