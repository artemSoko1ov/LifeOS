import { create } from 'zustand';
import { api } from '@/shared/api';
import type { Task } from './types';

type TaskStore = {
  tasks: Task[];

  isFetching: boolean;
  fetchError: string | null;

  isCreating: boolean;
  createError: string | null;

  isEditing: boolean;
  editError: string | null;

  isDeleting: boolean;
  deleteError: string | null;

  fetchTasks: () => Promise<void>;
  createTask: (title: string) => Promise<Task | null>;
  editTask: (
    id: string,
    title?: string,
    completed?: boolean,
  ) => Promise<Task | null>;
  deleteTask: (id: string) => Promise<Task | null>;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  isFetching: false,
  fetchError: null,
  isCreating: false,
  createError: null,
  isEditing: false,
  editError: null,
  isDeleting: false,
  deleteError: null,

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

  editTask: async (id, title, completed) => {
    try {
      set({
        isEditing: true,
        editError: null,
      });

      const task = await api<Task>(`/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, completed }),
      });

      set((state) => ({
        tasks: state.tasks.map((item) => (item.id === task.id ? task : item)),
      }));

      return task;
    } catch {
      set({
        editError: 'Не удалось отредактировать задачу',
      });

      return null;
    } finally {
      set({
        isEditing: false,
      });
    }
  },
  deleteTask: async (id) => {
    try {
      set({
        isDeleting: true,
        deleteError: null,
      });

      const task = await api<Task>(`/tasks/${id}`, {
        method: 'DELETE',
      });

      set((state) => ({
        tasks: state.tasks.filter((item) => item.id !== task.id),
      }));

      return task;
    } catch {
      set({
        deleteError: 'Не удалось удалить задачу',
      });

      return null;
    } finally {
      set({
        isDeleting: false,
      });
    }
  },
}));
