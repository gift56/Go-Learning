import { useState } from "react";
import { useForm } from "@mantine/form";
import { Modal, Group, Button, TextInput, Textarea } from "@mantine/core";
import { ENDPOINT, Todo } from "../App";
import { KeyedMutator } from "swr";

const CreateTodo = ({ mutate }: { mutate: KeyedMutator<Todo[]> }) => {
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
      body: JSON.stringify(values),
    }).then((res) => res.json());

    mutate(updated);
    form.reset();
    setOpen(false);
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
        <Button
          sx={() => ({ width: "90%" })}
          mb={12}
          onClick={() => setOpen(true)}
        >
          Add Todo
        </Button>
      </Group>
    </>
  );
};

export default CreateTodo;
