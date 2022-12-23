import { useRef, useState } from "react";
import { clientAuth } from "../../api/api";
import { LogUserIn } from "../auth/auth";
import {
  ButtonStyle,
  InputStyle,
  LoginTitle,
  TextButton,
  Wapper,
} from "../shared";

const LoginInput = ({ email, password, loading, error, onChange }) => {
  return (
    <InputStyle>
      <input
        className="input"
        name="email"
        ref={email}
        type="text"
        placeholder="이메일"
        disabled={loading}
        onChange={onChange}
      />
      <input
        className="input"
        name="password"
        ref={password}
        type="password"
        placeholder="비밀번호"
        disabled={loading}
        onChange={onChange}
      />
      {error ? <p className="AuthError">{error}</p> : <p></p>}
    </InputStyle>
  );
};

function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const login = LogUserIn();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loginPage, setLoginPage] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const onClickPageChanger = () => {
    setLoginPage(!loginPage);
    setError(null);
  };

  const onClickLogin = async (e) => {
    if (emailRef.current.value === "")
      return setError("이메일을 입력해 주세요");

    if (passwordRef.current.value === "")
      return setError("비밀번호를 입력해 주세요");

    try {
      setLoading(true);
      const res = await clientAuth.login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      if (res.data) {
        const token = res.data.access_token;
        login(token);
      } else throw Error("에러");
    } catch (err) {
      //   const statusCode = err.response?.status;
      //   const statusText = err.response?.statusText; // Bad Request
      const message = err.response?.data?.message; // id should not be empty

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const onClickSignUp = async (e) => {
    try {
      setLoading(true);
      const res = await clientAuth.signup({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      if (res.data) {
        const token = res.data.access_token;
        login(token);
      } else if (res.status === 400)
        throw new Error("이미 존재하는 이메일 입니다.");
      else if (res.status === 404) throw new Error("응답이 없습니다.");
      else throw Error("에러");
    } catch (err) {
      //   const statusCode = err.response?.status;
      //   const statusText = err.response?.statusText; // Bad Request
      const message = err.response?.data?.message[0]; // id should not be empty
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const onChange = () => {
    const { value: email } = emailRef.current;
    const { value: pw } = passwordRef.current;
    const regExp = /@/;
    if (pw.length >= 8 && regExp.test(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <Wapper>
      {<LoginTitle>{loginPage ? "로그인" : "회원가입"}</LoginTitle>}
      <LoginInput
        email={emailRef}
        password={passwordRef}
        loading={loading}
        error={error}
        onChange={onChange}
      />
      {loginPage ? (
        <>
          <ButtonStyle disabled={disabled} onClick={onClickLogin}>
            로그인
          </ButtonStyle>
          <TextButton onClick={onClickPageChanger}>가입하기</TextButton>
        </>
      ) : (
        <>
          <ButtonStyle disabled={disabled} onClick={onClickSignUp}>
            회원가입
          </ButtonStyle>
          <TextButton onClick={onClickPageChanger}>뒤로</TextButton>
        </>
      )}
    </Wapper>
  );
}

export default LoginForm;
