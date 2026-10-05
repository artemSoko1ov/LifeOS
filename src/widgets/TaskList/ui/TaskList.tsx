import { useState } from 'react';
import TaskItem, { type Task } from '@/entities/Task';
import { useTaskStore } from '@/entities/Task';
import TaskEditForm from '@/features/EditTask';
import styles from './TaskList.module.scss';

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const isFetching = useTaskStore((state) => state.isFetching);
  const fetchError = useTaskStore((state) => state.fetchError);
  const editTask = useTaskStore((state) => state.editTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const [editingTask, setEditingTask] = useState<Task | null>(null);

  if (isFetching) {
    return <p>Загрузка...</p>;
  }

  if (fetchError) {
    return <p>Не удалось загрузить задачи.</p>;
  }

  return (
    <section className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={setEditingTask}
          onDelete={(id) => void deleteTask(id)}
          onToggle={(task) =>
            void editTask(task.id, undefined, !task.completed)
          }
        />
      ))}

      {editingTask && (
        <TaskEditForm
          isOpen
          onClose={() => setEditingTask(null)}
          id={editingTask.id}
          title={editingTask.title}
          completed={editingTask.completed}
        />
      )}
    </section>
  );
};

export default TaskList;
