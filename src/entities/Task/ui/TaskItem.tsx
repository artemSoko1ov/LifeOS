import type { Task } from '../model/types';

import styles from './TaskItem.module.scss';

type Props = {
  task: Task;
};

const TaskItem = ({ task }: Props) => {
  return (
    <article className={styles.task}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={task.Completed}
        readOnly
      />

      <span className={styles.title}>{task.Title}</span>
    </article>
  );
};

export default TaskItem;
