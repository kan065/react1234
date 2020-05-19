import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  className: string;
}

export const TodoToolbar: FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <nav>
        <Link to="/"> Home ></Link>
        <Link to="/todo"> Todo List ></Link>
        <Link to="/reminders"> Reminders ></Link>
      </nav>
    </div>
  );
};
