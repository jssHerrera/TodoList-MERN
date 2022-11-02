import TasksRoute from "./routes/tasksRoute";
import { TaskProvider } from "./context/taskContext";
export const App = () => {
  return (
    <TaskProvider>
      <TasksRoute />
    </TaskProvider>
  );
};
