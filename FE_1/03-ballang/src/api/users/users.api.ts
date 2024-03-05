import { client } from "../client.api";

const signUp = async (dto: { email: string; password: string }) => {
  const url = "/auth/sign-up";
  const response = await client.post(url, dto);
  const data = response.data;

  console.log("서버로부터 회원가입 이후에 받은 데이터", data);
};

const logIn = async (dto: { email: string; password: string }) => {
  const url = "/auth/log-in";
  const response = await client.post(url, dto);
  const data = response.data;

  console.log("서버로부터 로그인이후에 받은 데이터", data);
};

const usersAPI = {
  signUp,
  logIn,
};

export default usersAPI;
