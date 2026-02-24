import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Task } from "../entities/Task";
import { tasksService } from "../services/api";

import { TasksContext } from "./TasksContext";

interface TasksContextProviderProps {
  children: ReactNode;
}

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    tasksService.fetchTasks().then((data) => setTasks(data));
  }, []);

  const createTask = async (attributes: Omit<Task, "id">) => {
    const newTask = await tasksService.createTask(attributes);
    setTasks((currentState) => [...currentState, newTask]);
  };

  const updateTask = async (id: string, attributes: Partial<Omit<Task, "id">>) => {
    const updatedTask = await tasksService.updateTask(id, attributes);
    setTasks((currentState) => {
      const updatedTasks = [...currentState];
      const taskIndex = updatedTasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        updatedTasks[taskIndex] = updatedTask;
      }
      return updatedTasks;
    });
  };

  const deleteTask = async (id: string) => {
    await tasksService.deleteTask(id);
    setTasks((currentState) => currentState.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        taskToEdit,
        setTaskToEdit,
        isFormOpen,
        setIsFormOpen,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
