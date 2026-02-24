import type { Task } from "../entities/Task";

// Coleção de tarefas em memória para simular o backend
let inMemoryTasks: Task[] = [
  {
    id: "1",
    title: "Configurar deploy no GitHub Pages",
    description: "Adicionar gh-pages, homepage e base url.",
    status: "TODO",
    priority: "HIGH",
  },
  {
    id: "2",
    title: "Implementar autenticação de usuário",
    description: "Adicionar fluxo de login e registro.",
    status: "IN_PROGRESS",
    priority: "MEDIUM",
  },
  {
    id: "3",
    title: "Refatorar componente TaskCard",
    description: "Melhorar a legibilidade e organização do código.",
    status: "DONE",
    priority: "LOW",
  },
];

export const tasksService = {
  async fetchTasks(): Promise<Task[]> {
    // Simula um atraso de rede
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [...inMemoryTasks]; // Retorna uma cópia para evitar modificações diretas
  },

  async createTask(body: Omit<Task, "id">): Promise<Task> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newTask: Task = {
      id: String(inMemoryTasks.length + 1), // ID simples baseado no tamanho
      ...body,
    };
    inMemoryTasks.push(newTask);
    return newTask;
  },

  async updateTask(id: string, attributes: Partial<Omit<Task, "id">>): Promise<Task> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const taskIndex = inMemoryTasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      throw new Error("Task not found");
    }
    inMemoryTasks[taskIndex] = { ...inMemoryTasks[taskIndex], ...attributes };
    return inMemoryTasks[taskIndex];
  },

  async deleteTask(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    inMemoryTasks = inMemoryTasks.filter((task) => task.id !== id);
  },
};
