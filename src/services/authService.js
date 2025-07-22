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

const loginWithNaver = () => {
  try {
    const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
      import.meta.env.VITE_NAVER_CLIENT_ID
    }&redirect_uri=${
      import.meta.env.VITE_NAVER_REDIRECT_URI
    }&state=${nanoid()}`;
    window.location.href = NAVER_LOGIN_URL;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
const loginWithGoogle = () => {
  try {
    const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
      import.meta.env.VITE_GOOGLE_CLIENT_ID
    }&redirect_uri=${
      import.meta.env.VITE_GOOGLE_REDIRECT_URI
    }&response_type=code&scope=profile&state=${nanoid()}`;
    window.location.href = GOOGLE_LOGIN_URL;
  } catch (err) {
    console.log(err);
  }
};
const loginWithKakao = () => {
  try {
    const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
      import.meta.env.VITE_KAKAO_CLIENT_ID
    }&redirect_uri=${
      import.meta.env.VITE_KAKAO_REDIRECT_URI
    }&state=${nanoid()}&scope=profile_nickname, profile_image, account_email, name, gender, age_range, birthday, birthyear, phone_number`;
    window.location.href = KAKAO_LOGIN_URL;
  } catch (err) {}
};
