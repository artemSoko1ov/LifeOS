import TaskItem from '@/entities/Task';
import styles from './TaskList.module.scss';
import { useTaskStore } from '@/entities/Task/model/store.ts';

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const loading = useTaskStore((state) => state.loading);
  const error = useTaskStore((state) => state.error);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Не удалось загрузить задачи.</p>;
  }

  return (
    <section className={styles.list}>
      {tasks.map((task) => (
        <TaskItem key={task.ID} task={task} />
      ))}
    </section>
  );
};

export default TaskList;
