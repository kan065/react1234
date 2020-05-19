import React, { FC } from "react";
import styles from "./layout.module.css";
import { TodoToolbar } from "./TodoToolbar/TodoToolbar";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.root}>
      <TodoToolbar className={styles.toolBar} />
      <main className={styles.content}>{children}</main>
    </div>
  );
};
