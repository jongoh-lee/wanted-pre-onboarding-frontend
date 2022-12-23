import { clientPost } from "../../api/api";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import TodoIcon from "./TodoIcon";

const Todo = ({ todo, getTodo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isUpDate, setIsUpDate] = useState(false);
  const upDateRef = useRef();

  return (
    <TodoWrap>
      <TodoIcon
        isUpDate={isUpDate}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
        todo={todo}
        upDateRef={upDateRef}
      />

      <ButtonWrap>
        <ButtonStyled
          onClick={() => {
            if (isUpDate) {
              setIsUpDate(!isUpDate);
              clientPost
                .update(todo.id, {
                  todo: upDateRef.current.value,
                  isCompleted: isCompleted,
                })
                .then(() => {
                  getTodo();
                });
            } else if (!isUpDate) {
              setIsUpDate(!isUpDate);
            }
          }}
        >
          {isUpDate ? "제출" : "수정"}
        </ButtonStyled>

        {isUpDate ? (
          <ButtonStyled
            onClick={() => {
              setIsUpDate(false);
              setIsCompleted(todo.isCompleted);
            }}
          >
            취소
          </ButtonStyled>
        ) : (
          <ButtonStyled
            onClick={() => {
              clientPost.delete(todo.id).then(() => {
                getTodo();
              });
            }}
          >
            삭제
          </ButtonStyled>
        )}
      </ButtonWrap>
    </TodoWrap>
  );
};

const TodoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #0095f6;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
const ButtonStyled = styled.button`
  background-color: #0095f6;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  color: white;
`;

export default Todo;
