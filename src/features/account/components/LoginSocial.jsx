import useLogin from "../hooks/useLogin.js";

const socialProvider = ["naver", "google", "kakao"];

const socialHandleClick = (provider) => {
  useLogin(provider);
};

const LoginSocial = () => {
  return (
    <>
      <ul>
        {socialProvider.map((provider) => (
          <li key={provider}>
            <button
              key={provider}
              className={provider}
              onClick={() => socialHandleClick(provider)}
            >
              {provider.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LoginSocial;
