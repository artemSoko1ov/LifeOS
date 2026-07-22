import styles from './Dashboard.module.scss';
import DashboardCard from "@/shared/ui/DashboardCard";
import {Weight} from "lucide-react";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <DashboardCard title="Вес" icon={<Weight />}>
        <h2>65.1 кг</h2>
        <p>+0.3 кг</p>
      </DashboardCard>
    </div>
  );
};

export default Dashboard;