import {Outlet} from "react-router-dom";
import Sidebar from "@/widgets/Sidebar";
import Header from "@/widgets/Header";

const AppLayout = () => {

  return (
    <div className="app-layout">
      <Sidebar />
      <main>
        <Header />

        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;