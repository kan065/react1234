import { IReminderItem } from "models";
import { axios } from "api";

export const getAllReminders = async () => {
  return axios.get<IReminderItem[]>("reminders");
};

export const getReminder = async (reminderId: number) => {
  return axios.get<IReminderItem>(`reminders/${reminderId}`);
};

export const deleteReminder = async (reminderId: number) => {
  return axios.delete<IReminderItem>(`reminders/${reminderId}`);
};

export const addReminder = async (
  title: string,
  description: string,
  notify: boolean,
  date: Date,
) => {
  return axios.post<IReminderItem>("reminders", {
    title,
    description,
    notify,
    date,
  });
};
