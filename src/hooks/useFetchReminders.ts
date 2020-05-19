import { useState, useEffect } from "react";
import api from "api";
import { IReminderItem } from "models";

export const useFetchReminders = () => {
  const [reminders, setReminders] = useState<IReminderItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReminders = async () => {
      setIsLoading(true);

      try {
        const response = await api.reminders.getAllReminders();
        setReminders(response.data);
      } catch (e) {
        console.log("error: ", e);
      }
      setIsLoading(false);
    };

    fetchReminders();
  }, []);

  return { reminders, isLoading };
};
