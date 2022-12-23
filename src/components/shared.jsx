import styled from "styled-components";

export const CenterBox = styled.div`
  max-width: 500px;
  height: calc(100vh - 50px);
  background-color: #f2f3f7;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputStyle = styled(Wapper)`
  .input {
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid grey;
    border-radius: 3px;
  }
  .AuthError {
    color: red;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
  }
`;

export const ButtonStyle = styled.button`
  padding: 5px;
  background-color: white;
  width: 120px;
  text-align: center;
  margin: 3px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => (props.back ? "rgb(191, 52, 56)" : "white")};
  color: ${(props) => props.color || "black"};
  &:disabled {
    opacity: 0.5;
  }
`;

export const TextButton = styled(ButtonStyle)`
  background-color: transparent;
  font-weight: bold;
  color: grey;
`;

export const LoginTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;
