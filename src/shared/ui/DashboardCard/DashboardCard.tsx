import type {ReactNode} from "react";
import styles from "./DashboardCard.module.scss";

type DashboardCardProps = {
  title: string,
  icon: ReactNode,
  children: ReactNode,
}

const DashboardCard = ({title, icon, children}: DashboardCardProps) => {

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <span className={styles.icon}>{icon}</span>

        <h3>{title}</h3>
      </header>

      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;