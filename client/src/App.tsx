import { Box } from "@mantine/core";
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
      {JSON.stringify(data)} <CreateTodo mutate={mutate} />
    </Box>
  );
};

export default App;
