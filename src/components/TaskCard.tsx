import { AlertDialog, Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import type { Task, TaskPriority, TaskStatus } from "../entities/Task";
import { useTasks } from "../hooks/useTasks";
interface TaskCardProps {
  task: Task;
}
export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { deleteTask, updateTask, setTaskToEdit, setIsFormOpen } = useTasks();

  const getActionText = (status: TaskStatus) => {
    const actionTexts = {
      todo: "Iniciar",
      doing: "Concluir",
      done: "Arquivar",
    };
    return actionTexts[status] || "Iniciar";
  };

  const getActionColor = (status: TaskStatus) => {
    const actionColors: { [key: string]: "blue" | "green" | "bronze" } = {
      todo: "blue",
      doing: "green",
      done: "bronze",
    };
    return actionColors[status] || "blue";
  };

  const getPriorityColor = (priority: TaskPriority) => {
    const priorityColors: { [key: string]: "sky" | "amber" | "tomato" } = {
      low: "sky",
      medium: "amber",
      high: "tomato",
    };
    return priorityColors[priority] || "sky";
  };



  const handleUpdate = (id: string, status: TaskStatus) => {
    if (status === "todo") {
      updateTask(id, { status: "doing" });
    } else if (status === "doing") {
      updateTask(id, { status: "done" });
    }
  };

  const handleEdit = () => {
    setTaskToEdit(task);
    setIsFormOpen(true);
  };

  return (
    <Card>
      <Flex align="center" gap="4">
        <Heading as="h3" size="3">
          {task.title}
        </Heading>
        <Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
      </Flex>
      <Text as="p" my="4">
        {task.description}
      </Text>
      <Flex gap="2">
        {task.status !== "done" && (
          <Button color={getActionColor(task.status)} onClick={() => handleUpdate(task.id, task.status)}>
            {getActionText(task.status)}
          </Button>
        )}
        <Button color="gray" onClick={handleEdit}>
          Editar
        </Button>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red">Excluir</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content maxWidth="25rem">
            <AlertDialog.Title>Excluir Tarefa</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Tem certeza que deseja excluir esta tarefa? Esta ação não pode ser desfeita.
            </AlertDialog.Description>
            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                  Cancelar
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button variant="solid" color="red" onClick={() => deleteTask(task.id)}>
                  Excluir Tarefa
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </Flex>
    </Card>
  );
};
