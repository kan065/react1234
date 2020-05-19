import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ITodoItem } from "models";
import api from "api";
import { useHistory } from "react-router-dom";

interface RouteProps {
  todoId: string;
}

export const TodoDetailedView: FC = () => {
  let { todoId } = useParams<RouteProps>();
  let history = useHistory();

  const [todoItem, setTodoItem] = useState<ITodoItem>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.todo.get(Number(todoId));
        setTodoItem(response.data);
      } catch (e) {
        console.log("ERROR", e);
      }
    };

    fetchData();
  }, [todoId]);

  if (!todoItem) {
    return null;
  }

  /* Deletes the Todo item and redirects to "/todo* through history */

  const handleDeleteTodo = () => {
    const deleteTodo = async () => {
      try {
        const response = await api.todo.deleteTodo(Number(todoId));
        setTodoItem(response.data);
        history.push("/todo");
      } catch (e) {
        console.log("error: ", e);
      }
    };

    deleteTodo();
  };

  return (
    <div>
      <h2>{todoItem.title}</h2>
      <div>{todoItem.description}</div>
      <button onClick={handleDeleteTodo}>Delete</button>
    </div>
  );
};
