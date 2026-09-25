import TaskList from '@/widgets/TaskList/ui/TaskList.tsx';
import { useEffect } from 'react';
import { useTaskStore } from '@/entities/Task/model/store.ts';

const TodayPage = () => {
  const fetchTasks = useTaskStore((state) => state.fetchTasks);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return <TaskList />;
};

export default TodayPage;
