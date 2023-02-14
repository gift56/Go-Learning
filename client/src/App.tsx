import { Box, List, ThemeIcon } from "@mantine/core";
import { CheckCircleFillIcon, TrashIcon } from "@primer/octicons-react";
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

  const deletTodo = async (id: number) => {
    await fetch(`${ENDPOINT}/api/todos/${id}`, {
      method: "DELETE",
    });
    // Pass null as the second argument to indicate that the data is now empty.
    const updated = data?.filter((todo) => todo.id !== id) || [];
    mutate(`${ENDPOINT}/api/todos`, updated);
  };

  return (
    <Box
      sx={(theme) => ({
        padding: "2rem",
        width: "100%",
        maxWidth: "40rem",
        margin: "4rem auto",
        border: "1px solid white",
      })}
    >
      <List spacing="xs" size="sm" mb={12} center>
        {data &&
          Array.isArray(data) &&
          data?.map((todo) => (
            <>
              <List.Item
                onClick={() => markAsDone(todo.id)}
                key={`todo_item__${todo.id}`}
                sx={(theme) => ({
                  color: "white",
                })}
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
              <ThemeIcon
                onClick={() => deletTodo(todo.id)}
                color="red"
                size={24}
                radius="xl"
              >
                <TrashIcon />
              </ThemeIcon>
            </>
          ))}
      </List>
      <CreateTodo mutate={mutate} />
    </Box>
  );
};

export default App;
