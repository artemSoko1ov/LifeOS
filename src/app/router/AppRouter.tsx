import {Routes, Route} from "react-router-dom";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import TasksPage from "@/pages/tasks/TasksPage";
import WorkoutsPage from "@/pages/workouts/WorkoutsPage";
import GoalsPage from "@/pages/goals/GoalsPage";
import NutritionPage from "@/pages/nutrition/NutritionPage";
import {AppLayout} from "@/app/layouts/AppLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="/"
          element={<DashboardPage />}
        />
        <Route
          path="/tasks"
          element={<TasksPage />}
        />
        <Route
          path="/workouts"
          element={<WorkoutsPage />}
        />
        <Route
          path="/nutrition"
          element={<NutritionPage />}
        />
        <Route
          path="/goals"
          element={<GoalsPage />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;