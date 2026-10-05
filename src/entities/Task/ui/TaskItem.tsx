import type { Task } from '../model/types';
import styles from './TaskItem.module.scss';
import Button from '@/shared/ui/Button';

type Props = {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggle: (task: Task) => void;
};

const TaskItem = ({ task, onEdit, onDelete, onToggle }: Props) => {
  return (
    <article className={styles.task}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task)}
      />
      <span className={styles.title}>{task.title}</span>
      <div className={styles.actions}>
        <Button
          type="button"
          className={styles.buttonEdit}
          onClick={() => onEdit(task)}
        >
          ✎
        </Button>
        <Button
          type="button"
          className={styles.buttonDelete}
          onClick={() => onDelete(task.id)}
        >
          🗑
        </Button>
      </div>
    </article>
  );
};

export default TaskItem;
