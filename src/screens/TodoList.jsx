import React, { useEffect, useState } from "react";
import { todoAPI } from "../api/api";
import styled from "styled-components";
import Todo from "../components/todo/Todo.jsx";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/todo/TodoForm";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoList = () => {
  const [todos, setTodos] = useState();

  const navigate = useNavigate();

  const getTodo = () => {
    todoAPI.getTodos().then((res) => {
      setTodos(res);
    });
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      getTodo();
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container>
      <h1>Todo List</h1>
      <TodoForm setTodos={setTodos} />

      {todos?.map((todo) => {
        return <Todo key={todo.id} todo={todo} getTodo={getTodo} />;
      })}
    </Container>
  );
};

export default TodoList;
