import React, { FC, useState, FormEvent } from "react";
import { AddForm } from "components";
import api from "api";
import { useHistory } from "react-router-dom";

export const AddTodoView: FC = () => {
  let history = useHistory();
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  const handleOnTodoSubmit = (event: FormEvent<HTMLElement>) => {
    /* Disables reload of form */
    event.preventDefault();

    const addTodo = async () => {
      try {
        await api.todo.addTodo(title, description);
        history.push("/todo");
      } catch (e) {
        console.log("error: ", e);
      }
    };

    addTodo();
  };

  return (
    <div>
      <h2>New Todo</h2>
      <AddForm
        onSubmit={handleOnTodoSubmit}
        onTitleChange={(title) => setTitle(title)}
        onDescriptionChange={(description) => setDescription(description)}
        title={title}
        description={description}
      />
    </div>
  );
};
