import axios from "axios";
import { nanoid } from "nanoid";

const socialLoginHandler = async (provider) => {
  const providers = {
    naver: loginWithNaver,
    google: loginWithGoogle,
    kakao: loginWithKakao,
  };

  const selectedLogin = providers[provider];

  if (selectedLogin) {
    await selectedLogin();
  } else {
    console.log("이상한 로그인이 들어왔는데..");
  }
};

export default socialLoginHandler;

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});

const state = nanoid();
const loginWithNaver = () => {
  try {
    const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
      import.meta.env.VITE_NAVER_CLIENT_ID
    }&redirect_uri=${import.meta.env.VITE_NAVER_REDIRECT_URI}&state=${state}`;
    window.location.href = NAVER_LOGIN_URL;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
const loginWithGoogle = () => {};
const loginWithKakao = () => {};
