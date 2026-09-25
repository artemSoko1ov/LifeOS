import { create } from 'zustand';
import { api } from '@/shared/api';
import type { Task } from './types';

type TaskStore = {
  tasks: Task[];
  loading: boolean;
  error: string | null;

  fetchTasks: () => Promise<void>;
  createTask: (title: string) => Promise<boolean>;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  loading: false,
  error: null,

  fetchTasks: async () => {
    try {
      set({ loading: true, error: null });

      const tasks = await api('/tasks');

      set({
        tasks,
        loading: false,
      });
    } catch {
      set({
        error: 'Не удалось загрузить задачи',
        loading: false,
      });
    }
  },

  createTask: async (title) => {
    try {
      set({ error: null });

      const task = await api('/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      set((state) => ({
        tasks: [...state.tasks, task],
      }));

      return true;
    } catch {
      set({
        error: 'Не удалось создать задачу',
      });

      return false;
    }
  },
}));
