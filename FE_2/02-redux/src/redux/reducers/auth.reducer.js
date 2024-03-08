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
