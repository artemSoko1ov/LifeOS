import {Outlet} from "react-router-dom";
import Sidebar from "@/widgets/Sidebar";
import Header from "@/widgets/Header";
import styles from "./AppLayout.module.scss";

const AppLayout = () => {

  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.body}>
        <Sidebar />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;