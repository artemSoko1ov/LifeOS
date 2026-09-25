import { useState } from 'react';
import { api } from '@/shared/api';

export const useCreateTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  async function createTask(title: string) {
    try {
      setLoading(true);
      setError(null);

      await api('/tasks', {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return true;
    } catch {
      setError('Не удалось создать задачу');
    } finally {
      setLoading(false);
    }
  }

  return {
    createTask,
    loading,
    error,
  };
};
