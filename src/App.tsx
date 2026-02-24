import { Box, Flex, Heading } from "@radix-ui/themes";
import { CreateTaskForm } from "./components/CreateTaskForm";
import { TaskBoard } from "./components/TaskBoard";
import { TasksContextProvider } from "./contexts/TasksContextProvider";
function App() {
  return (
    <TasksContextProvider>
      <Box maxWidth="80rem" mx="auto">
        <Box height="4rem">
          <Flex align="center" height="100%" gap="4">
            <Heading as="h1" size="8" weight="light">
              React Kanban
            </Heading>
            <CreateTaskForm />
          </Flex>
        </Box>

        <Box>
          <Heading as="h2" mb="4">
            Quadro de Tarefas
          </Heading>
          <TaskBoard />
        </Box>
      </Box>
    </TasksContextProvider>
  );
}

export default App;
