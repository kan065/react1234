import React, { FC } from "react";
import { ITodoItem } from "models";
import { Link } from "react-router-dom";
import styles from "./todo-item.module.css";

interface Props {
  todoItem: ITodoItem;
}

export const TodoItem: FC<Props> = (props) => {
  const { todoItem } = props;

  return (
    <div className={styles.todoItemRoot}>
      <Link to={`/todo/${todoItem.id}`}>
        <div className={styles.todoItemContent}>{todoItem.title}</div>
      </Link>
    </div>
  );
};
