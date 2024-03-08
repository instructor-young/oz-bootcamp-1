import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.reducer";

// 1. 만든다~
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// 2. 전역(App)에 스토어를 내려준다~

// 3. 사용한다.
// -> 저장된 값을 읽어야지~ -> 너무 쉬운 거~
// -> 저장된 값을 변경해야지~ -> 까다로운 공장을 통해서 처리해야 하는 거
