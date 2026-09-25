import { useTasks } from '../model/useTasks';
import TaskItem from '@/entities/Task';
import styles from './TaskList.module.scss';
import Button from '@/shared/ui/Button';

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
      <Button onClick={() => alert(1)}>Add task</Button>
    </section>
  );
};

export default TaskList;
