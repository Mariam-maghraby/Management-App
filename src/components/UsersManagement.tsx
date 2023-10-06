import React from "react";
import UsersDataGrid from "./UsersGrid";
import { Paper, Title } from "@mantine/core";

function UsersManagement() {
  return (
    <>
      <Paper shadow="xs" radius="xs" p="xl">
        <Title order={3}>User Managment</Title>
        <UsersDataGrid />
      </Paper>
    </>
  );
}

export default UsersManagement;
