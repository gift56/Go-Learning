import { Box } from "@mantine/core";
import useSwR from "swr";
import CreateTodo from "./Components/CreateTodo";

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((res) => res.json());

const App = () => {
  const { data, mutate } = useSwR("api/todos", fetcher);

  return (
    <Box>
      {JSON.stringify(data)} <CreateTodo />
    </Box>
  );
};

export default App;
