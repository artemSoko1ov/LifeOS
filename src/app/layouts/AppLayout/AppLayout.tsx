import {Outlet} from "react-router-dom";
import Sidebar from "@/widgets/Sidebar";
import Header from "@/widgets/Header";
import styles from "./AppLayout.module.scss";

const AppLayout = () => {

  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <main>
        <Header />

        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;