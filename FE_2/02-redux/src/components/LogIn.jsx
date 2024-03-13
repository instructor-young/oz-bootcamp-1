import React from "react";
import { useDispatch, useSelector } from "react-redux";

function LogIn() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClickLogIn = () => {
    const action = {
      type: "로그인하기",
    }; // 이 코드는 직접 액션(객체)를 작성함
    // 실제로는 액션 크리에이터(작업 생성기)를 사용하는 게 일반적입니다.
    dispatch(action);
  };

  const handleClickLogOut = () => {
    const action = { type: "로그아웃하기" };
    dispatch(action);
  };

  return (
    <div style={{ backgroundColor: "yellowgreen" }}>
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

export default LogIn;
