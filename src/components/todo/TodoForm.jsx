import { useRef } from "react";
import styled from "styled-components";
import { todoAPI } from "../../api/api";
const TodoForm = ({ setTodos }) => {
  const inputRef = useRef();

  return (
    <FormWrap>
      <InputStyle type="text" ref={inputRef} />
      <ButtonStyled
        onClick={() => {
          todoAPI.addTodo({ todo: inputRef.current.value }).then(() => {
            todoAPI.getTodos().then((res) => {
              setTodos(res);
            });
            inputRef.current.value = "";
          });
        }}
      >
        추가
      </ButtonStyled>
    </FormWrap>
  );
};

const FormWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
`;
const InputStyle = styled.input`
  border-radius: 5px;
  width: 60%;
  border: 1px solid #0095f6;
  padding: 5px 10px;
  margin-right: 20px;
`;
const ButtonStyled = styled.button`
  background-color: #0095f6;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  color: white;
`;
export default TodoForm;
