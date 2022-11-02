import { useContext } from "react";
import TaskContext from "../context/taskContext";

export const useTasksContext = () => {
  return useContext(TaskContext);
};
