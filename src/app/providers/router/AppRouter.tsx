import {Routes, Route} from "react-router-dom";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import TasksPage from "@/pages/tasks/TasksPage";
import WorkoutsPage from "@/pages/workouts/WorkoutsPage";
import GoalsPage from "@/pages/goals/GoalsPage";
import NutritionPage from "@/pages/nutrition/NutritionPage";

const AppRouter = () => {
  return (
      <Routes>
        <Route element={<DashboardPage />} path="/"></Route>
        <Route element={<TasksPage />} path="/tasks"></Route>
        <Route element={<WorkoutsPage />} path="/workouts"></Route>
        <Route element={<GoalsPage />} path="/goals"></Route>
        <Route element={<NutritionPage />} path="/nutrition"></Route>
      </Routes>
  );
};

export default AppRouter;