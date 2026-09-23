import { useEffect, useState } from 'react';
import { api } from '@/shared/api';
import type { Task } from '@/entities/Task/model/types.ts';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await api('/tasks');

        setTasks(data);
      } catch {
        setError('Не удалось загрузить задачи');
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
  };
};
