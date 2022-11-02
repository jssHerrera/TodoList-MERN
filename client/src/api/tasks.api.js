import axios from "axios";
export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/api/tasks");

export const createTaskRequest = async (tasks) =>
  await axios.post("http://localhost:4000/api/tasks", tasks);

export const deletTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/api/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/api/tasks/${id}`);

export const updateTaskRequest = async (id, newFilds) =>
  await axios.put(`http://localhost:4000/api/tasks/${id}`, newFilds);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/api/tasks/${id}`, { done });
