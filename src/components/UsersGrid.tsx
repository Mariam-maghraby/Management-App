import { DataTable } from "mantine-datatable";
import users from "../data/users.json";
import dayjs from "dayjs";
import { User } from "../types/User";
import { useState } from "react";
import { Group, Paper, TextInput, Anchor, Avatar } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function UsersDataGrid() {
  const [selectedRecords, setSelectedRecords] = useState<User[]>([]);

  return (
    <Paper my="xl" py="xl" withBorder radius="md"  shadow="md">
      <Group>
      <TextInput
        icon={<IconSearch />}
        placeholder="Search.."
        // onChange={(event) => getSearchResultsWithTitle(event)}
      />
      {/* <Fieldset legend="Personal information">
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset> */}
    <Anchor href="https://mantine.dev/" target="_blank">
      All Filters
    </Anchor>
      </Group>
      
      <DataTable
        withBorder
        highlightOnHover
        fontSize="sm"
        minHeight={100}
        columns={[
          { accessor: "name" ,
          // render: ({ name }) => {
          //   return(
          //   <Avatar color="cyan" radius="xl">MK</Avatar>
          //   {name}
          //   )
          // },
          render: ({ name}) => (
            <>
            <Avatar color="cyan" radius="xl" size="sm">MK</Avatar>{name}
            </>
          ),
        },
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
    </Paper>
  );
}
