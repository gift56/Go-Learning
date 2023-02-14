import { useState } from "react";
import { useForm } from "@mantine/form";
import { Modal, Group } from "@mantine/core";

const CreateTodo = () => {
  const [open, setOpen] = useState(false);

  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },
  });

  return (
    <>
      <Modal opened={open} onClose={() => setOpen(false)} title="Create Todo">
        Form
      </Modal>
      <Group></Group>
    </>
  );
};

export default CreateTodo;
