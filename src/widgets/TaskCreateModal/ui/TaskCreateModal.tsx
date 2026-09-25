import { type FormEvent, useState } from 'react';

import Button from '@/shared/ui/Button';

import styles from './TaskCreateModal.module.scss';
import { useCreateTask } from '@/widgets/TaskCreateModal/model/useCreateTask.ts';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const TaskCreateModal = ({ isOpen, onClose }: Props) => {
  const { createTask, loading, error } = useCreateTask();
  const [title, setTitle] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const success = await createTask(title);

    if (success) {
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
              autoFocus
            />
          </label>

          <div className={styles.actions}>
            <Button type="button" onClick={onClose}>
              Отмена
            </Button>

            <Button type="submit" disabled={loading}>
              {loading ? 'Загрузка...' : 'Создать'}
            </Button>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default TaskCreateModal;
