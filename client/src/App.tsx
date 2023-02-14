import { Box } from "@mantine/core";
import useSwR from "swr";

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((res) => res.json());

const App = () => {
  const {} = useSwR('/api/todos', fetcher);
  return <Box>Hello world</Box>;
};

export default App;
