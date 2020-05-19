import { ITodoItem } from "models";
import { axios } from "api";

export const getAll = async () => {
  return axios.get<ITodoItem[]>("todos");
};

export const get = async (todoId: number) => {
  return axios.get<ITodoItem>(`todos/${todoId}`);
};

export const deleteTodo = async (todoId: number) => {
  return axios.delete<ITodoItem>(`todos/${todoId}`);
};

export const addTodo = async (title: string, description: string) => {
  return axios.post<ITodoItem>("/todos", {
    title: title,
    description: description,
  });
};
