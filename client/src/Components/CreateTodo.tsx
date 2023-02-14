import { useState } from "react";
import { useForm } from "@mantine/form";
import { Modal, Group, Button, TextInput, Textarea } from "@mantine/core";

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
        <form>
          <TextInput />
          <Textarea />
          <Button>Create Todo</Button>
        </form>
      </Modal>
      <Group position="center">
        <Button fullWidth mb={12} onClick={() => setOpen(true)}>
          Add Todo
        </Button>
      </Group>
    </>
  );
};

export default CreateTodo;
