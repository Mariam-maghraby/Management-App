import { useState } from "react";
import { Group, Code, TextInput, Stack, Accordion, Title } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconSearch,
  IconDashboard,
} from "@tabler/icons-react";
import { Logo } from "./Logo";
import classes from "./AppSidebar.module.css";

const data = [
  { link: "", label: "Notifications", icon: IconBellRinging },
  { link: "", label: "Billing", icon: IconReceipt2 },
  { link: "", label: "Security", icon: IconFingerprint },
  { link: "", label: "SSH Keys", icon: IconKey },
  { link: "", label: "Databases", icon: IconDatabaseImport },
  { link: "", label: "Authentication", icon: Icon2fa },
  { link: "", label: "Other Settings", icon: IconSettings },
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
              <IconDashboard  color="gray"/>
              <Title order={4} color="gray">
                Dashboard
              </Title>
            </Group>
            {/* {links} */}

            <Accordion
              chevronPosition="left"
              defaultValue="customization"
              mt={"md"}>
              <Accordion.Item value="customization">
                <Accordion.Control>Customization</Accordion.Control>
                <Accordion.Panel color="green">
                  Colors, fonts, shadows and many other parts are customizable
                  to fit your design needs
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="flexibility">
                <Accordion.Control>Flexibility</Accordion.Control>
                <Accordion.Panel>
                  Configure components appearance and behavior with vast amount
                  of settings or overwrite any part of component styles
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="focus-ring">
                <Accordion.Control>No annoying focus ring</Accordion.Control>
                <Accordion.Panel>
                  With new :focus-visible pseudo-class focus ring appears only
                  when user navigates with keyboard
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </Stack>

        <div className={classes.footer}>
          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}>
            <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
            <span>Change account</span>
          </a>

          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        </div>
      </nav>
    </Stack>
  );
}
