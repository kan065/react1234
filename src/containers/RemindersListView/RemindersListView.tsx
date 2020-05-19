import React, { FC } from "react";
import { useFetchReminders } from "hooks";
import { RemindersList } from "components";
import { Link } from "react-router-dom";

export const RemindersListView: FC = () => {
  const { isLoading, reminders } = useFetchReminders();

  if (isLoading) return <div> Loading... </div>;

  if (reminders.length === 0) {
    return <div>ADD BUTTON</div>;
  }

  return (
    <div>
      <Link to="/reminders/add">Create New Reminder</Link>
      <RemindersList reminderList={reminders} />
    </div>
  );
};
