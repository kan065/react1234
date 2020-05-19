import React, { FC, FormEvent } from "react";
import styles from "./add-form.module.css";

/* BALANCED COMPONENT
    If I add the state directly (title, description) then it is unbalanced */

interface Props {
  onSubmit: (event: FormEvent<HTMLElement>) => void;
  title: string;
  description: string;
  onTitleChange: (title: string) => void;
  onDescriptionChange: (description: string) => void;
}

export const AddForm: FC<Props> = (props) => {
  const {
    onSubmit,
    title,
    description,
    onTitleChange,
    onDescriptionChange,
  } = props;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        value={title}
        type="text"
        onChange={(event) => onTitleChange(event.target.value)}
        placeholder="Please enter a title ..."
      />
      <textarea
        value={description}
        onChange={(event) => onDescriptionChange(event.target.value)}
        placeholder="Describe what needs to be done ..."
      />
      <button type="submit"> Add </button>
    </form>
  );
};
