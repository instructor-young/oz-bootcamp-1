import { useAuth } from "../contexts/auth.context";

function Page() {
  const { isLoggedIn, logIn } = useAuth();

  return (
    <main>
      <h2>홈페이지</h2>

      <div>
        <span>로그인 여부 : </span>
        <span>
          {isLoggedIn ? "네, 로그인 했어요" : "아니요, 아직 로그인 안했어요"}
        </span>
      </div>

      <div>
        <button onClick={logIn}>로그인하기</button>
      </div>
    </main>
  );
}

export default Page;
