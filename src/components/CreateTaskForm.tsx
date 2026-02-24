import { type SubmitEventHandler } from "react";
import { z } from "zod";
import { Badge, Box, Button, Dialog, Flex, RadioGroup, Text, TextArea, TextField } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";
import { useTasks } from "../hooks/useTasks";

const CreateTaskSchema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatória"),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["low", "medium", "high"]),
});

export const CreateTaskForm: React.FC = () => {
  const { createTask, updateTask, taskToEdit, setTaskToEdit, isFormOpen, setIsFormOpen } = useTasks();

  const handleOpenChange = (isOpen: boolean) => {
    setIsFormOpen(isOpen);
    if (!isOpen) {
      setTaskToEdit(null);
    }
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = formData.get("task-title") as string;
    const description = formData.get("task-description") as string;
    const status = formData.get("task-status") as string;
    const priority = formData.get("task-priority") as string;

    const taskData = CreateTaskSchema.parse({
      title,
      description,
      status,
      priority,
    });

    if (taskToEdit) {
      await updateTask(taskToEdit.id, taskData);
    } else {
      await createTask(taskData);
    }

    handleOpenChange(false);
    event.currentTarget.reset();
  };

  return (
    <Dialog.Root open={isFormOpen} onOpenChange={handleOpenChange}>
      <Dialog.Trigger>
        <Button>
          <PlusIcon />
          Nova Tarefa
        </Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="32rem">
        <Dialog.Title>{taskToEdit ? "Editar Tarefa" : "Nova Tarefa"}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {taskToEdit ? "Edite os detalhes da tarefa selecionada" : "Adicione uma nova tarefa ao quadro"}
        </Dialog.Description>
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="4">
            <Box maxWidth="32rem">
              <Box mb="2">
                <Text as="label" htmlFor="task-title">
                  Título da Tarefa
                </Text>
              </Box>
              <TextField.Root
                id="task-title"
                name="task-title"
                placeholder="Digite o título da tarefa"
                autoFocus
                required
                defaultValue={taskToEdit?.title}
                key={taskToEdit ? `edit-${taskToEdit.id}-title` : "new-title"}
              />
            </Box>
            <Box maxWidth="32rem">
              <Box mb="2">
                <Text as="label" htmlFor="task-description">
                  Descrição da Tarefa
                </Text>
              </Box>
              <TextArea
                id="task-description"
                name="task-description"
                placeholder="Digite a descrição da tarefa"
                required
                defaultValue={taskToEdit?.description}
                key={taskToEdit ? `edit-${taskToEdit.id}-description` : "new-description"}
              />
            </Box>
            <Flex gap="8">
              <Box>
                <Text as="div" mb="2">
                  Situação
                </Text>
                <RadioGroup.Root
                  name="task-status"
                  defaultValue={taskToEdit?.status ?? "todo"}
                  key={taskToEdit ? `edit-${taskToEdit.id}-status` : "new-status"}
                >
                  <RadioGroup.Item value="todo">
                    <Badge color="gray">Para Fazer</Badge>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="doing">
                    <Badge color="yellow">Em Progresso</Badge>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="done">
                    <Badge color="green">Concluída</Badge>
                  </RadioGroup.Item>
                </RadioGroup.Root>
              </Box>
              <Box>
                <Text as="div" mb="2">
                  Prioridade
                </Text>
                <RadioGroup.Root
                  name="task-priority"
                  defaultValue={taskToEdit?.priority ?? "low"}
                  key={taskToEdit ? `edit-${taskToEdit.id}-priority` : "new-priority"}
                >
                  <RadioGroup.Item value="low">
                    <Badge color="sky">Baixa</Badge>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="medium">
                    <Badge color="amber">Média</Badge>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="high">
                    <Badge color="tomato">Alta</Badge>
                  </RadioGroup.Item>
                </RadioGroup.Root>
              </Box>
            </Flex>
            <Flex gap="2" justify="end">
              <Dialog.Close>
                <Button color="gray" variant="soft">
                  Cancelar
                </Button>
              </Dialog.Close>
              <Button type="submit">{taskToEdit ? "Salvar Tarefa" : "Criar Tarefa"}</Button>
            </Flex>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

