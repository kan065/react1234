import defaultAxios from "axios";

import * as todo from "./todoAPI";
import * as reminders from "./reminderAPI";

export const axios = defaultAxios.create({
  baseURL: process.env.REACT_APP_API_URL as string,
});

export default { todo, reminders };
