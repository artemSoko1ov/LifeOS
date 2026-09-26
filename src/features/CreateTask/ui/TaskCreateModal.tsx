import { type FormEvent, useState } from 'react';
import Button from '@/shared/ui/Button';
import styles from './TaskCreateModal.module.scss';
import { useTaskStore } from '@/entities/Task';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const TaskCreateModal = ({ isOpen, onClose }: Props) => {
  const createTask = useTaskStore((state) => state.createTask);
  const isCreating = useTaskStore((state) => state.isCreating);
  const createError = useTaskStore((state) => state.createError);

  const [title, setTitle] = useState('');

  if (!isOpen) {
    return null;
  }

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
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <h2>Новая задача</h2>

          <button
            className={styles.close}
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
          >
            ×
          </button>
        </header>

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
              disabled={isCreating}
              autoFocus
            />
          </label>

          <div className={styles.actions}>
            <Button type="button" onClick={onClose}>
              Отмена
            </Button>

            <Button type="submit" disabled={isCreating}>
              {isCreating ? 'Загрузка...' : 'Создать'}
            </Button>
          </div>
        </form>
        {createError && <p>{createError}</p>}
      </div>
    </div>
  );
};

export default TaskCreateModal;
