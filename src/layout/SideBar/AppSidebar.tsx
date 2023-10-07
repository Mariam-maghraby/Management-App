import { useState } from "react";
import {
  Group,
  Code,
  TextInput,
  Stack,
  Accordion,
  Title,
  Text,
} from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconReceipt2,
  IconSearch,
  IconDashboard,
} from "@tabler/icons-react";
import { Logo } from "./Logo";
import classes from "./AppSidebar.module.css";

const data = [
  { link: "", label: "ATM Settings", icon: IconBellRinging },
  { link: "", label: "Business Setup", icon: IconReceipt2 },
  { link: "", label: "User Management", icon: IconFingerprint },
];

export function AppSidebar() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Stack bg={"#050A30"}>
      <nav className={classes.navbar} style={{ width: 250 }}>
        <Stack ml="md" spacing="xs" mb="xl">
          <div className={classes.navbarMain}>
            <Group className={classes.header}>
              <Logo style={{ width: 120, height: 100 }} />
              <Code fw={700}>v3.1.2</Code>
            </Group>
            <TextInput
              placeholder="Quick Access"
              size="xs"
              icon={<IconSearch />}
              rightSectionWidth={70}
              radius={"xl"}
              mb="xl"
              mr={"sm"}
            />
            <Group spacing={"xs"}>
              <IconDashboard color="gray" />
              <Title order={4} color="gray">
                Dashboard
              </Title>
            </Group>
            {/* {links} */}
            <Accordion
              chevronPosition="right"
              defaultValue="User Management"
              mt={"md"}
              color="green">
              <Accordion.Item value="focus-ring">
                <Accordion.Control>
                  <Text c="gray" fw={700} fz="md">
                    ATM Settings
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  With new :focus-visible pseudo-class focus ring appears only
                  when user navigates with keyboard
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="Busssines Setup">
                <Accordion.Control>
                  <Text c="gray" fw={700} fz="md">
                    Bussiness Setup
                  </Text>
                </Accordion.Control>
                <Accordion.Panel color="green">
                  Colors, fonts, shadows and many other parts are customizable
                  to fit your design needs
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="management">
                <Accordion.Control>
                  <Text c="gray" fw={700} fz="md">
                    User Management
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  Configure components appearance and behavior with vast amount
                  of settings or overwrite any part of component styles
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </Stack>
      </nav>
    </Stack>
  );
}
