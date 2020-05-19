import { useState, useEffect } from "react";
import api from "api";
import { ITodoItem } from "models";

export const useFetchTodos = () => {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await api.todo.getAll();
        setTodoItems(response.data);
      } catch (e) {
        console.log("ERROR", e);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { todoItems, isLoading };
};
