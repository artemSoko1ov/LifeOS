import TaskItem from '@/entities/Task';
import styles from './TaskList.module.scss';
import { useTaskStore } from '@/entities/Task';

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const isFetching = useTaskStore((state) => state.isFetching);
  const fetchError = useTaskStore((state) => state.fetchError);

  if (isFetching) {
    return <p>Загрузка...</p>;
  }

  if (fetchError) {
    return <p>Не удалось загрузить задачи.</p>;
  }

  return (
    <section className={styles.list}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </section>
  );
};

export default TaskList;
