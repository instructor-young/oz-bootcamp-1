"use client";

function LoggedInOnlyLayout({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   if(만약에로그인안했으면) {
  //     홈페이지로 보내는 코드
  //   }
  // }, []);

  return children;
}

export default LoggedInOnlyLayout;
