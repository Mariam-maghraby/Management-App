import "./App.css";
import UsersManagement from "./components/UsersManagement";
import {AppSidebar} from "./layout/SideBar/AppSidebar";
import { AppShell } from "@mantine/core";

function App() {
  return (
    <>
      <AppShell navbar={<AppSidebar />}>
        <UsersManagement />
      </AppShell>
    </>
  );
}

export default App;
