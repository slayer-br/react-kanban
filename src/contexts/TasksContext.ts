import { createContext } from "react";
import type { Task } from "../entities/Task";

export interface TasksContextData {
  tasks: Task[];
  taskToEdit: Task | null;
  setTaskToEdit: (task: Task | null) => void;
  isFormOpen: boolean;
  setIsFormOpen: (open: boolean) => void;
  createTask: (attributes: Omit<Task, "id">) => Promise<void>;
  updateTask: (id: string, attributes: Partial<Omit<Task, "id">>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
}

export const TasksContext = createContext({} as TasksContextData);
