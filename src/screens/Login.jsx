import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authAPI } from "../api/api";
import LoginButton from "../components/logIn/LoginButton";
import LoginForm from "../components/logIn/LoginForm";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  });

  const onClickLogin = () => {
    authAPI
      .postLogin({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.access_token);
        alert("로그인 완료 ");
        navigate("/todo");
      })
      .catch(() => {
        alert("비밀번호 또는 아이디를 확인해주세요");
      });
  };

  return (
    <Container>
      <h2>로그인</h2>
      <LoginForm emailRef={emailRef} passwordRef={passwordRef} />
      <LoginButton onClickLogin={onClickLogin} />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  margin: auto;
  margin-top: 10%;
  .title {
    text-align: center;
    color: #0095f6;
  }
`;

export default Login;
