"use client";

import API from "@/api";
import Page from "@/components/Page";
import { ChangeEventHandler, useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleClickSignUp = async () => {
    if (!email) return alert("이메일 입력해 주세요.");
    if (!password) return alert("비밀번호 입력해 주세요.");
    if (!passwordConfirm) return alert("비밀번호 확인을 입력해 주세요.");
    if (password !== passwordConfirm)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");

    // 값들이 다 잘 들어온 상태
    // 서버로 값을 보내서 회원가입 진행~
    await API.users.signUp({ email, password });
  };

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    if (value.includes("a"))
      return alert("a는 이메일 주소에 포함될 수 없어요.");

    setEmail(value);
  };

  return (
    <Page title="회원가입">
      <p className="mb-8">이메일과 비밀번호를 가지고 회원가입을 할 거에요</p>

      <div className="grid gap-y-2">
        <input
          type="email"
          className="input"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={handleChangeEmail}
        />

        <input
          type="password"
          className="input"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="비밀번호 확인을 입력하세요"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button onClick={handleClickSignUp} className="button">
          회원가입하기
        </button>
      </div>
    </Page>
  );
}

export default SignUpPage;
