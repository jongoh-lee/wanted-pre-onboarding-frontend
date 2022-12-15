import React from "react";
import styled from "styled-components";

const LoginForm = ({ emailRef, passwordRef }) => {
  return (
    <InputWrap>
      <input className="input" placeholder="이메일" ref={emailRef} />
      <input
        className="input"
        placeholder="비밀번호"
        ref={passwordRef}
        type="password"
      />
    </InputWrap>
  );
};

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  .input {
    padding: 10px;
    border-radius: 5px;
    border: 2px solid gray;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;
export default LoginForm;
