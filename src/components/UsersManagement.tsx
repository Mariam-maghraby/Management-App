import React from "react";
import UsersDataGrid from "./UsersGrid";
import {
  Paper,
  Title,
  Group,
  Button,
  Modal,
  Stack,
  TextInput,
  Select,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { IconChevronDown } from "@tabler/icons-react";

function UsersManagement() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      username: "",
      status: "Any",
      group: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <Paper shadow="xs" radius="xs" p="xl">
        <Group position="apart">
          <Title order={3} color="#050A30">
            User Managment
          </Title>
          <Button variant="filled" color="green" onClick={open}>
            + New User
          </Button>
        </Group>
        <Modal opened={opened} onClose={close} title="Add New User">
          <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
              <TextInput
                label="Name"
                placeholder="Enter full name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
              />
              <TextInput
                label="User Name"
                placeholder="Enter username"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
              />

              <TextInput
                label="Email Address"
                placeholder="Enter email address"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email && "Invalid email"}
                radius="sm"
              />
              <Select
                label="User Group"
                placeholder="Choose User group"
                rightSection={<IconChevronDown size={14} stroke={1.5} />}
                // onChange={(event) =>
                //   form.setFieldValue("status", event.currentTarget.value)
                // }
                data={["Office", "Engineering", "Sales", "Marketing"]}
              />
              <Select
                label="Assign profile"
                placeholder="Choose profile"
                rightSection={<IconChevronDown size={14} stroke={1.5} />}
                data={["Active", "Inactive", "Locked"]}
              />
            </Stack>
            <Group mt="xl" position="apart">
              <Anchor
                component="button"
                type="button"
                color="#050A30"
                c="dimmed"
                td="underline"
                // onClick={() => toggle()}
                size="xs">
                Reset
              </Anchor>
              <Group>
                <Button type="submit" radius="sm" color="gray" variant="light" >
                  Cancel
                </Button>
                <Button type="submit" radius="sm" color="green">
                  Add
                </Button>
              </Group>
            </Group>
          </form>
        </Modal>
        <UsersDataGrid />
      </Paper>
    </>
  );
}

export default UsersManagement;
