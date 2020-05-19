import React, { FC } from "react";
import { TodoItem } from "./TodoItem/TodoItem";
import { ITodoItem } from "models";

interface Props {
  todoList: ITodoItem[];
}

export const TodoList: FC<Props> = (props) => {
  const { todoList } = props;

  return (
    <>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </>
  );
};
