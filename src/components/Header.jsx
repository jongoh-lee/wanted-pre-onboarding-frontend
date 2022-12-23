import styled from "styled-components";
import { LoginCheck, LogUserOut } from "./auth/auth";
import { ButtonStyle, LoginTitle } from "./shared";

function Header() {
  const logOut = LogUserOut();
  const { token, isLoggedIn } = LoginCheck();
  return (
    <HeaderBar>
      {token && isLoggedIn ? (
        <ButtonStyle onClick={() => logOut()} color="red">
          로그아웃
        </ButtonStyle>
      ) : (
        <LoginTitle>Welcome to Todo World</LoginTitle>
      )}
    </HeaderBar>
  );
}

const HeaderBar = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
