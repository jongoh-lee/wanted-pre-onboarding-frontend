import { useRef, useState } from "react";
import styled from "styled-components";
import SignUpButton from "../components/signUp/SignUpButton";
import SignUpForm from "../components/signUp/SignUpForm";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();

  const [isDisable, setIsDisable] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const [ispassword, setIsPassword] = useState(false);
  const [ispasswordCheck, setIspasswordCheck] = useState(false);

  const onChangeInput = () => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (
      regExp.test(emailRef.current.value) ||
      emailRef.current.value.length === 0
    ) {
      setIsEmail(false);
    } else if (emailRef.current.value.length > 0) {
      setIsEmail(true);
    }

    if (
      passwordRef.current.value.length >= 8 ||
      passwordRef.current.value.length === 0
    ) {
      setIsPassword(false);
    } else if (passwordRef.current.value.length > 0) {
      setIsPassword(true);
    }

    if (
      passwordCheckRef.current.value === passwordRef.current.value ||
      passwordCheckRef.current.value.length === 0
    ) {
      setIspasswordCheck(false);
    } else if (passwordCheckRef.current.value.length > 0) {
      setIspasswordCheck(true);
    }

    if (
      regExp.test(emailRef.current.value) &&
      passwordRef.current.value.length >= 8 &&
      passwordCheckRef.current.value === passwordRef.current.value
    ) {
      setIsDisable(false);
    } else if (
      !regExp.test(emailRef.current.value) ||
      passwordRef.current.value.length < 8 ||
      passwordCheckRef.current.value !== passwordRef.current.value
    ) {
      setIsDisable(true);
    }
  };

  return (
    <Container>
      <h2 className="title">회원가입 페이지</h2>
      <SignUpForm
        onChangeInput={onChangeInput}
        isEmail={isEmail}
        ispassword={ispassword}
        ispasswordCheck={ispasswordCheck}
        emailRef={emailRef}
        passwordRef={passwordRef}
        passwordCheckRef={passwordCheckRef}
      />
      <SignUpButton
        isDisable={isDisable}
        emailRef={emailRef}
        passwordRef={passwordRef}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  margin: auto;
  margin-top: 10%;
  .title {
    text-align: center;
    color: black;
  }
`;

export default SignUp;
