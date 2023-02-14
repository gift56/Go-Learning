import { Box } from "@mantine/core";
import useSwR from "swr";

const fetcher = (url: string) =>fetch(url).then((res)=>res.json())

const App = () => {
  return <Box>Hello world</Box>;
};

export default App;
