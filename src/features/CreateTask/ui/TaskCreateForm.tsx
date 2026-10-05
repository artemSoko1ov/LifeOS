import { type FormEvent, useState } from 'react';
import Button from '@/shared/ui/Button';
import styles from './TaskCreateForm.module.scss';
import { useTaskStore } from '@/entities/Task';
import Modal from '@/shared/ui/Modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const TaskCreateForm = ({ isOpen, onClose }: Props) => {
  const createTask = useTaskStore((state) => state.createTask);
  const isLoading = useTaskStore((state) => state.create.isLoading);
  const error = useTaskStore((state) => state.create.error);

  const [title, setTitle] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const task = await createTask(title.trim());

    if (task) {
      setTitle('');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Новая задача">
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Название задачи
          <input
            className={styles.input}
            type="text"
            name="title"
            placeholder="Например, изучить Go"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            disabled={isLoading}
            autoFocus
          />
        </label>

        <div className={styles.actions}>
          <Button type="button" onClick={onClose}>
            Отмена
          </Button>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Загрузка...' : 'Создать'}
          </Button>
        </div>

        {error && <p>{error}</p>}
      </form>
    </Modal>
  );
};

export default TaskCreateForm;
