import React from "react";
import UsersDataGrid from "./UsersGrid";
import { Paper } from "@mantine/core";

function UsersManagement() {
  return (
    <>
      <Paper shadow="xs" radius="xs" p="xl">
        <h3>Users Managment</h3>
        <UsersDataGrid />
      </Paper>
    </>
  );
}

export default UsersManagement;
