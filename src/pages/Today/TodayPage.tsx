import { useEffect } from 'react';
import TaskList from '@/widgets/TaskList';
import { useTaskStore } from '@/entities/Task';

const TodayPage = () => {
  const fetchTasks = useTaskStore((state) => state.fetchTasks);

  useEffect(() => {
    void fetchTasks();
  }, [fetchTasks]);

  return <TaskList />;
};

export default TodayPage;
