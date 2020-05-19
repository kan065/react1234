import React, { FC } from "react";
import { IReminderItem } from "models";
import styles from "./reminder-item.module.css";
import { Link } from "react-router-dom";

interface Props {
  reminderItem: IReminderItem;
}

export const ReminderItem: FC<Props> = (props) => {
  const { reminderItem } = props;
  return (
    <div className={styles.reminderItemRoot}>
      <Link to={`/reminders/${reminderItem.id}`}>
        <div className={styles.reminderItemContent}>{reminderItem.title}</div>
      </Link>
    </div>
  );
};
