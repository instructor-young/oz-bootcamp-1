import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClickLogIn = () => {
    // 작업지시서 써야지~
    const action = {
      type: "로그인하기",
    };
    dispatch(action);
  };

  const handleClickLogOut = () => {
    // 작업지시서 써야지~
    const action = { type: "로그아웃하기" };
    dispatch(action);
  };

  return (
    <div>
      <div>
        <span>로그인 여부 : </span>
        <span>{isLoggedIn ? "로그인 됨" : "로그인 안 됨"}</span>
      </div>

      <hr />

      {isLoggedIn ? (
        <button onClick={handleClickLogOut}>로그아웃하기</button>
      ) : (
        <button onClick={handleClickLogIn}>로그인하기</button>
      )}
    </div>
  );
}

export default App;
