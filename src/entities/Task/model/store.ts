import { create } from 'zustand';
import { api } from '@/shared/api';
import type { Task } from './types';

type TaskStore = {
  tasks: Task[];

  isFetching: boolean;
  fetchError: string | null;

  isCreating: boolean;
  createError: string | null;

  fetchTasks: () => Promise<void>;
  createTask: (title: string) => Promise<Task | null>;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  isFetching: false,
  fetchError: null,
  isCreating: false,
  createError: null,

  fetchTasks: async () => {
    try {
      set({ isFetching: true, fetchError: null });

      const tasks = await api<Task[]>('/tasks');

      set({
        tasks,
      });
    } catch {
      set({
        fetchError: 'Не удалось загрузить задачи',
      });
    } finally {
      set({
        isFetching: false,
      });
    }
  },

  createTask: async (title) => {
    try {
      set({
        isCreating: true,
        createError: null,
      });

      const task = await api<Task>('/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      set((state) => ({
        tasks: [...state.tasks, task],
      }));

      return task;
    } catch {
      set({
        createError: 'Не удалось создать задачу',
      });

      return null;
    } finally {
      set({
        isCreating: false,
      });
    }
  },
}));
