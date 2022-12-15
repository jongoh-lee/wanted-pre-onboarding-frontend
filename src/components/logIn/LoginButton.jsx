import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginButton = ({ onClickLogin }) => {
  const navigate = useNavigate();

  return (
    <ButtonWrap>
      <ButtonStyled onClick={onClickLogin}>로그인</ButtonStyled>
      <ButtonStyled
        onClick={() => {
          navigate("/signup");
        }}
        color="black"
        backColor="white"
      >
        회원가입
      </ButtonStyled>
    </ButtonWrap>
  );
};

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonStyled = styled.button`
  margin-bottom: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.backColor || "#0095f6"};
  &:disabled {
    opacity: 0.5;
  }
`;
export default LoginButton;
