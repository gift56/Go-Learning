import { Box, List, ThemeIcon } from "@mantine/core";
import { CheckCircleFillIcon } from "@primer/octicons-react";
import useSwR from "swr";
import CreateTodo from "./Components/CreateTodo";

export interface Todo {
  id: number;
  title: string;
  body: string;
  done: boolean;
}

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((res) => res.json());

const App = () => {
  const { data, mutate } = useSwR<Todo[]>("api/todos", fetcher);

  const markAsDone = async (id: number) => {
    const updated = await fetch(`${ENDPOINT}/api/todos/${id}/done`, {
      method: "PATCH",
    }).then((res) => res.json());
    mutate(updated);
  };

  return (
    <Box
      sx={(theme) => ({
        padding: "2rem",
        width: "100%",
        maxWidth: "40rem",
        margin: "0 auto",
      })}
    >
      <List spacing="xs" size="sm" mb={12} center>
        {data?.map((todo) => (
          <List.Item
            key={`todo__${todo.id}`}
            icon={
              todo.done ? (
                <ThemeIcon color="teal" size={24} radius="xl">
                  <CheckCircleFillIcon size={20} />
                </ThemeIcon>
              ) : (
                <ThemeIcon color="gray" size={24} radius="xl">
                  <CheckCircleFillIcon size={20} />
                </ThemeIcon>
              )
            }
          >
            {todo.title}
          </List.Item>
        ))}
      </List>
      <CreateTodo mutate={mutate} />
    </Box>
  );
};

export default App;
