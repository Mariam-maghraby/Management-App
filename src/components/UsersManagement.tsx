import React from "react";
import UsersDataGrid from "./UsersGrid";
import { Paper, Title, Group, Button } from "@mantine/core";

function UsersManagement() {
  return (
    <>
      <Paper shadow="xs" radius="xs" p="xl">
        <Group position="apart">
          <Title order={3}>User Managment</Title>
          <Button variant="filled" color="green">
            + New User
          </Button>
        </Group>
        <UsersDataGrid />
      </Paper>
    </>
  );
}

export default UsersManagement;
