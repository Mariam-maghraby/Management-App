import { DataTable } from "mantine-datatable";
import users from "../data/users.json";
import dayjs from "dayjs";
import { User } from "../types/User";
import { useState } from "react";

export default function UsersDataGrid() {
  const [selectedRecords, setSelectedRecords] = useState<User[]>([]);

  return (
    <DataTable
      withBorder
      borderRadius="md"
      shadow="md"
      highlightOnHover
      fontSize="sm"
      minHeight={100}
      columns={[
        { accessor: "name" },
        { accessor: "userName", title: "User Name" },
        { accessor: "emailAddress", title: "Email Address" },
        { accessor: "group" },
        { accessor: "status" },
        {
          accessor: "createdOn",
          render: ({ createdOn }) => dayjs(createdOn).format("MMM D, YYYY"),
        },
      ]}
      defaultColumnProps={{
        noWrap: true,
        ellipsis: true,
        titleSx: (theme) => ({ "&&": { color: theme.colors.gray[6] } }),
      }}
      records={users}
      selectedRecords={selectedRecords}
      onSelectedRecordsChange={setSelectedRecords}
    />
  );
}
