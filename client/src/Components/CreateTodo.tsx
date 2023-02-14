import { useState } from "react";
import { useForm } from "@mantine/form";
import { Modal, Group, Button, TextInput, Textarea } from "@mantine/core";
import { ENDPOINT } from "../App";

const CreateTodo = () => {
  const [open, setOpen] = useState(false);

  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },
  });

  const createTodo = async (values: { title: string; body: string }) => {
    const updated = await fetch(`${ENDPOINT}/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <Modal opened={open} onClose={() => setOpen(false)} title="Create Todo">
        <form onSubmit={form.onSubmit(createTodo)}>
          <TextInput
            required
            mb={12}
            label="Todo"
            placeholder="What do you want to do?"
            {...form.getInputProps("title")}
          />
          <Textarea
            required
            mb={12}
            label="Body"
            placeholder="Tell me more..."
            {...form.getInputProps("body")}
          />
          <Button type="submit">Create Todo</Button>
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
