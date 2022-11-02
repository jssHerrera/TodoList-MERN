import { createContext, useState } from "react";
import {
  createTaskRequest,
  deletTaskRequest,
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [cargando, setCargando] = useState(false);

  const loadTasks = async () => {
    try {
      setCargando(true);
      const response = await getTasksRequest();
      setTasks(response.data);
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  // =================================================
  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // =================================================
  const deleteTasks = async (id) => {
    try {
      await deletTaskRequest(id);
      setTasks(tasks.filter((elem) => elem.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // =================================================
  const createTasks = async (tasks) => {
    try {
      await createTaskRequest(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  // =================================================
  const updateTask = async (id, newFilds) => {
    try {
      const response = await updateTaskRequest(id, newFilds);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // =================================================
  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((elem) => elem.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
      setTasks(
        tasks.map((elem) =>
          elem.id === id ? { ...elem, done: !elem.done } : elem
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        cargando,
        loadTasks,
        getTask,
        deleteTasks,
        createTasks,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
