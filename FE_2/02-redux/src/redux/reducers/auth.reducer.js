// 공장파일이니까~

// 일단 공장 만들어야지!

export function authReducer(prevState = { isLoggedIn: false }, action) {
  const newState = { ...prevState };

  if (action.type === "로그인하기") {
    newState.isLoggedIn = true;
  } else if (action.type === "로그아웃하기") {
    newState.isLoggedIn = false;
  }

  return newState;
}

// 공장은 상태를 작업지시서에 따라 변경하기 위해서 존재

// 이전 상태를 알아야, 그걸 바탕으로 다음 상태로 만들어 줄 수 있겠죠 -> "state" || "prevState"
// 작업지시서가 필요하겠죠 -> "action"
