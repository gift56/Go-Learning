import { Box, List } from "@mantine/core";
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

  return (
    <Box>
      <List spacing="xs" size="sm" mb={12} center>
        {data?.map((todo) => (
          <List.Item>{todo.title}</List.Item>
        ))}
      </List>
      <CreateTodo mutate={mutate} />
    </Box>
  );
};

export default App;
