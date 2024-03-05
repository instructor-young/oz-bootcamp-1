"use client";

import API from "@/api";
import Page from "@/components/Page";
import { useState } from "react";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogInIng, setIsLogInIng] = useState(false);

  const handleClickLogIn = async () => {
    if (!email) return alert("이메일 입력해 주세요.");
    if (!password) return alert("비밀번호 입력해 주세요.");

    // 값들이 다 잘 들어온 상태
    // 서버로 값을 보내서 로그인 진행~

    setIsLogInIng(true);
    await API.users.logIn({ email, password });
    setIsLogInIng(false);
  };

  return (
    <Page title="로그인">
      <p className="mb-8">이메일과 비밀번호를 가지고 로그인을 할 거에요</p>

      <div className="grid gap-y-2">
        <input
          type="email"
          className="input"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLogInIng}
        />

        <input
          type="password"
          className="input"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLogInIng}
        />

        <button
          onClick={handleClickLogIn}
          className="button"
          disabled={isLogInIng}
        >
          로그인하기
        </button>
      </div>
    </Page>
  );
}

export default LogInPage;
