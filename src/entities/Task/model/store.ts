import { create } from 'zustand';
import { api } from '@/shared/api';
import type { Task } from './types';

type TaskUpdate = {
  title?: string;
  completed?: boolean;
};

type TaskStore = {
  tasks: Task[];

  fetch: {
    isLoading: boolean;
    error: string | null;
  };

  create: {
    isLoading: boolean;
    error: string | null;
  };

  update: {
    isLoading: boolean;
    error: string | null;
  };

  delete: {
    isLoading: boolean;
    error: string | null;
  };

  fetchTasks: () => Promise<void>;
  createTask: (title: string) => Promise<Task | null>;
  updateTask: (id: string, data: TaskUpdate) => Promise<Task | null>;
  deleteTask: (id: string) => Promise<Task | null>;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  fetch: {
    isLoading: false,
    error: null,
  },

  create: {
    isLoading: false,
    error: null,
  },

  update: {
    isLoading: false,
    error: null,
  },

  delete: {
    isLoading: false,
    error: null,
  },

  fetchTasks: async () => {
    try {
      set({
        fetch: {
          isLoading: true,
          error: null,
        },
      });

      const tasks = await api<Task[]>('/tasks');

      set({
        tasks,
        fetch: {
          isLoading: false,
          error: null,
        },
      });
    } catch {
      set({
        fetch: {
          isLoading: false,
          error: 'Не удалось загрузить задачи',
        },
      });
    }
  },

  createTask: async (title) => {
    try {
      set({
        create: {
          isLoading: true,
          error: null,
        },
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
        create: {
          isLoading: false,
          error: null,
        },
      }));

      return task;
    } catch {
      set({
        create: {
          isLoading: false,
          error: 'Не удалось создать задачу',
        },
      });

      return null;
    }
  },

  updateTask: async (id, data) => {
    try {
      set({
        update: {
          isLoading: true,
          error: null,
        },
      });

      const task = await api<Task>(`/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      set((state) => ({
        tasks: state.tasks.map((item) => (item.id === task.id ? task : item)),
        update: {
          isLoading: false,
          error: null,
        },
      }));

      return task;
    } catch {
      set({
        update: {
          isLoading: false,
          error: 'Не удалось обновить задачу',
        },
      });

      return null;
    }
  },

  deleteTask: async (id) => {
    try {
      set({
        delete: {
          isLoading: true,
          error: null,
        },
      });

      const task = await api<Task>(`/tasks/${id}`, {
        method: 'DELETE',
      });

      set((state) => ({
        tasks: state.tasks.filter((item) => item.id !== task.id),
        delete: {
          isLoading: false,
          error: null,
        },
      }));

      return task;
    } catch {
      set({
        delete: {
          isLoading: false,
          error: 'Не удалось удалить задачу',
        },
      });

      return null;
    }
  },
}));
