import { useAuth } from "../contexts/auth.context";

function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <span>로그인 여부 : </span>
      <span>
        {isLoggedIn ? "네, 로그인 했어요" : "아니요, 아직 로그인 안했어요"}
      </span>
    </header>
  );
}

export default Header;
