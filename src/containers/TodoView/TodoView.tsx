import React, { FC } from "react";
import styles from "./todo-view.module.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { TodoDetailedView } from "containers";
import { TodoListView } from "containers/TodoListView/TodoListView";
import { AddTodoView } from "containers/AddTodoView/AddTodoView";

export const TodoView: FC = () => {
  let { path } = useRouteMatch();

  return (
    <div className={styles.root}>
      <Switch>
        <Route exact path={`${path}`} component={TodoListView} />
        <Route path={`${path}/addTodo`} component={AddTodoView} />
        <Route path={`${path}/:todoId`} component={TodoDetailedView} />
      </Switch>
    </div>
  );
};
