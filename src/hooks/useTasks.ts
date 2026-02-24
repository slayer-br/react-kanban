import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

// Hook para acessar o contexto de tarefas
export const useTasks = () => {
  return useContext(TasksContext);
}