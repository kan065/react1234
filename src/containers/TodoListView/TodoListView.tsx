import React, { FC } from "react";
import { TodoList } from "components";
import { useFetchTodos } from "hooks";
import { Link } from "react-router-dom";

export const TodoListView: FC = () => {
  const { isLoading: loading, todoItems } = useFetchTodos();

  if (loading) return <div>Loading...</div>;

  if (todoItems.length === 0) {
    return (
      <div>
        <Link to="/todo/addTodo">
          <button> Add new Todo </button>
        </Link>
        No Todos left
      </div>
    );
  }

  return (
    <div>
      <Link to="/todo/addTodo">
        <button> Add new Todo </button>
      </Link>
      <TodoList todoList={todoItems} />
    </div>
  );
};
