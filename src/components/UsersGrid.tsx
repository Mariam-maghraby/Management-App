import { DataTable } from "mantine-datatable";
import users from "../data/users.json";
import dayjs from "dayjs";
import { User } from "../types/User";
import { useState } from "react";
import {
  Group,
  Paper,
  TextInput,
  Anchor,
  Avatar,
  Stack,
  ActionIcon,
  Select,
  Text,
  Button,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import {
  IconSearch,
  IconCalendar,
  IconChevronDown,
  IconDots,
  IconDownload,
  IconPencil,
  IconBan,
  IconLock,
} from "@tabler/icons-react";

export default function UsersDataGrid() {
  const [selectedRecords, setSelectedRecords] = useState<User[]>([]);
  const [status, setStatus] = useState<string | null>("Any");
  const [date, setDate] = useState<Date | null>(new Date());

  const getStatusFilterResults = (value: string) => {
    if (value === "Any") {
      return users;
    } else {
      return users.filter((user) => user.status === value);
    }
  };

  return (
    <Paper my="xl" py="xl" withBorder radius="md" shadow="md">
      <Stack spacing="sm">
        <Group ml="md">
          <Group mt="md">
            <TextInput
              icon={<IconSearch />}
              placeholder="Search.."
              // onChange={(event) => getSearchResultsWithTitle(event)}
            />
            <TextInput value={"User Name"} />
          </Group>
          <Select
            label="User Status"
            value={status}
            placeholder="Any"
            rightSection={<IconChevronDown size={14} stroke={1.5} />}
            onChange={getStatusFilterResults}
            data={["Active", "Inactive", "Locked"]}
            size="xs"
          />
          <DateInput
            icon={<IconCalendar />}
            value={date}
            // variant="unstyled"
            onChange={setDate}
            label="Creation Date"
            placeholder="Date input"
            size="xs"
          />

          <Anchor href="/" target="_blank" mt={"md"}>
            All Filters
          </Anchor>
        </Group>

        <Group position="apart">
          <Group ml="md" mb="md" mr="xl" pr="xl">
            {selectedRecords.length === 0 && (
              <Text c="dimmed">{users.length} results</Text>
            )}
            {selectedRecords.length && (
              <>
                <Text c="dimmed">{selectedRecords.length} selected |</Text>
                <ActionIcon variant="light" color="gray" aria-label="Edit">
                  <IconPencil size="1.125rem" />
                </ActionIcon>
                <ActionIcon variant="light" color="gray" aria-label="Cancel">
                  <IconBan size="1.125rem" />
                </ActionIcon>
                <ActionIcon variant="light" aria-label="Lock">
                  <IconLock size="1.125rem" />
                </ActionIcon>
                <Button variant="light" size="md" compact color="gray">
                  Assign to Profile
                </Button>
                <Button variant="light" size="md" compact color="gray">
                  Assign to Group
                </Button>
                <ActionIcon variant="light" color="gray" aria-label="Options">
                  <IconDots size="1.125rem" />
                </ActionIcon>

                <Text c="dimmed" td="underline">
                  unselect All
                </Text>
              </>
            )}
            <Group
              mr={"xs"}
              ml="xl"
              style={{ marginLeft: "auto", marginRight: 0 }}>
              <ActionIcon
                variant="light"
                color="gray"
                aria-label="Download"
                style={{ marginLeft: "auto", marginRight: 0 }}>
                <IconDownload size="1.125rem" />
              </ActionIcon>
            </Group>
          </Group>
        </Group>
      </Stack>
      <DataTable
        withBorder
        highlightOnHover
        fontSize="sm"
        minHeight={100}
        columns={[
          {
            accessor: "name",
            render: ({ name }) => (
              <Group>
                <Avatar color="cyan" radius="xl" size="sm">
                  {name.split(" ")[0].slice(0, 1) +
                    name.split(" ").slice(-1)[0].slice(0, 1)}
                </Avatar>
                {name}
              </Group>
            ),
          },
          { accessor: "userName", title: "User Name" },
          { accessor: "emailAddress", title: "Email Address" },
          { accessor: "group" },
          {
            accessor: "status",
            width: 100,
            render: ({ status }) => (
              <Select
                style={{ border: 0 }}
                value={status}
                variant="unstyled"
                fw={700} //fontWeight 700
                rightSection={<IconChevronDown size={14} stroke={1.5} />}
                onChange={setStatus}
                data={["Active", "Inactive", "Locked"]} //
              />
            ),
          },
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
