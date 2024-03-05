"use client";

import API from "@/api";
import Page from "@/components/Page";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      API.users.logIn(data),
    onSuccess: () => alert("로그인 성공"),
    onError: () => alert("로그인 실패"),
  });

  const handleClickLogIn = async () => {
    if (!email) return alert("이메일 입력해 주세요.");
    if (!password) return alert("비밀번호 입력해 주세요.");

    await mutateAsync({ email, password });
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
          disabled={isPending}
        />

        <input
          type="password"
          className="input"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />

        <button
          onClick={handleClickLogIn}
          className="button"
          disabled={isPending}
        >
          로그인하기
        </button>
      </div>
    </Page>
  );
}

export default LogInPage;
