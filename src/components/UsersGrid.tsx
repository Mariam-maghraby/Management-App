import { DataTable } from "mantine-datatable";
import users from "../data/users.json";
import dayjs from "dayjs";

export default function UsersDataGrid() {
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
    />
  );
}
