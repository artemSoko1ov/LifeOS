import type { FormEvent } from 'react';

import Button from '@/shared/ui/Button';

import styles from './TaskCreateModal.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const TaskCreateModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
              autoFocus
            />
          </label>

          <div className={styles.actions}>
            <Button type="button" onClick={onClose}>
              Отмена
            </Button>

            <Button type="submit">Создать</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskCreateModal;
