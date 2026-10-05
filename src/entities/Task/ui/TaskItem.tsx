import type { Task } from '../model/types';
import styles from './TaskItem.module.scss';
import { useTaskStore } from '@/entities/Task';
import Button from '@/shared/ui/Button';

type Props = {
  task: Task;
};

const TaskItem = ({ task }: Props) => {
  const isEditing = useTaskStore((state) => state.isEditing);
  const editTask = useTaskStore((state) => state.editTask);
  const handleToggle = () => {
    editTask(task.id, undefined, !task.completed);
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

      <Button className={styles.buttonEdit}>✎</Button>
    </article>
  );
};

export default TaskItem;
