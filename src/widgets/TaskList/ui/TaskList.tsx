import { useTasks } from '../model/useTasks';
import TaskItem from '@/entities/Task';
import styles from './TaskList.module.scss';

const TaskList = () => {
  const { tasks, loading, error } = useTasks();

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
