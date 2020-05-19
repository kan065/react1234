import React, { FC, useEffect, useState } from "react";
import api from "api";
import { useParams, useHistory } from "react-router-dom";
import { IReminderItem } from "models";

interface RouteProps {
  reminderId: string;
}

export const ReminderDetailedView: FC = () => {
  let { reminderId } = useParams<RouteProps>();
  let history = useHistory();
  const [reminderItem, setReminderItem] = useState<IReminderItem>();

  useEffect(() => {
    const getReminder = async () => {
      try {
        const response = await api.reminders.getReminder(Number(reminderId));
        setReminderItem(response.data);
      } catch (e) {
        console.log("error: ", e);
      }
    };

    getReminder();
  }, [reminderId]);

  const handleDeleteReminder = async () => {
    try {
      await api.reminders.deleteReminder(Number(reminderId));
      history.push("/reminders");
    } catch (e) {
      console.log("error: ", e);
    }
  };

  if (!reminderItem) {
    return null;
  }

  return (
    <div>
      <h2> {reminderItem.title} </h2>
      <div> {reminderItem.description} </div>
      <div> {reminderItem.date} </div>
      <div> {String(reminderItem.notify)} </div>
      <button> Edit </button>
      <button onClick={handleDeleteReminder}>Delete</button>
    </div>
  );
};
