import { useState } from "react";
import { useForm } from "@mantine/form";

const CreateTodo = () => {
  const [open, setOpen] = useState(false);

  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },
  });

  return <div>CreateTodo</div>;
};

export default CreateTodo;
