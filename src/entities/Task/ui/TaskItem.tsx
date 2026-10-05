import type { Task } from '../model/types';
import styles from './TaskItem.module.scss';
import { useTaskStore } from '@/entities/Task';
import Button from '@/shared/ui/Button';
import TaskEditForm from '@/features/EditTask';
import { useState } from 'react';

type Props = {
  task: Task;
};

const TaskItem = ({ task }: Props) => {
  const isEditing = useTaskStore((state) => state.isEditing);
  const editTask = useTaskStore((state) => state.editTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleToggle = () => {
    void editTask(task.id, undefined, !task.completed);
  };

  const handleDelete = () => {
    void deleteTask(task.id);
  };

  return (
    <article className={styles.task}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        disabled={isEditing}
      />
      <span className={styles.title}>{task.title}</span>
      <div className={styles.actions}>
        <Button
          type="button"
          className={styles.buttonEdit}
          onClick={() => setIsEditOpen(true)}
        >
          ✎
        </Button>
        <Button
          type="button"
          className={styles.buttonDelete}
          onClick={handleDelete}
        >
          🗑
        </Button>
      </div>

      <TaskEditForm
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        id={task.id}
        title={task.title}
        completed={task.completed}
      />
    </article>
  );
};

export default TaskItem;
