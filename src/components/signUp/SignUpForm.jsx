import styled from "styled-components";

const SignUpForm = ({
  onChangeInput,
  emailRef,
  passwordRef,
  passwordCheckRef,
  isEmail,
  ispassword,
  ispasswordCheck,
}) => {
  return (
    <InputWrap>
      <input
        onChange={onChangeInput}
        className="input"
        placeholder="이메일"
        ref={emailRef}
      />
      {isEmail ? <span>이메일 주소를 확인해주세요</span> : null}

      <input
        onChange={onChangeInput}
        className="input"
        placeholder="비밀번호"
        ref={passwordRef}
        type="password"
      />
      {ispassword ? <span>비밀번호를 8자이상 입력해주세요</span> : null}
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
  span {
    margin-bottom: 10px;
    color: red;
    font-size: 12px;
  }
`;
export default SignUpForm;
