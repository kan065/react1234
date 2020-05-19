import React, { FC } from "react";
import { IReminderItem } from "models";
import { ReminderItem } from "./ReminderItem/ReminderItem";

interface Props {
  reminderList: IReminderItem[];
}

export const RemindersList: FC<Props> = (props) => {
  const { reminderList } = props;

  return (
    <>
      {reminderList.map((reminder) => (
        <ReminderItem key={reminder.id} reminderItem={reminder} />
      ))}
    </>
  );
};
