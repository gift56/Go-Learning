import { useState } from "react";
import {useForm} from '@mantine/hooks'

const CreateTodo = () => {
  const [open, setOpen] = useState(false);

  const form = useForm();

  return <div>CreateTodo</div>;
};

export default CreateTodo;
