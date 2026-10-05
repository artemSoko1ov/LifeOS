import styles from './TaskEditForm.module.scss';
import Modal from '@/shared/ui/Modal';
import { type FormEvent, useState } from 'react';
import { useTaskStore } from '@/entities/Task';
import Button from '@/shared/ui/Button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  title: string;
  completed: boolean;
};

const TaskEditForm = ({ isOpen, onClose, id, title, completed }: Props) => {
  const updateTask = useTaskStore((state) => state.updateTask);
  const isLoading = useTaskStore((state) => state.update.isLoading);
  const error = useTaskStore((state) => state.update.error);

  const [newTitle, setNewTitle] = useState(title);
  const [newCompleted, setNewCompleted] = useState(completed);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = newTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    if (trimmedTitle === title.trim() && newCompleted === completed) {
      return;
    }

    const task = await updateTask(id, {
      title: trimmedTitle,
      completed: newCompleted,
    });

    if (task) {
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Редактирование задачи">
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Название задачи
          <input
            className={styles.input}
            type="text"
            name="title"
            placeholder="Например, изучить Go"
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            disabled={isLoading}
            autoFocus
          />
        </label>
        <label className={styles.label}>
          Выполнение задачи
          <input
            className={styles.checkbox}
            type="checkbox"
            name="completed"
            checked={newCompleted}
            onChange={(event) => setNewCompleted(event.target.checked)}
            disabled={isLoading}
          />
        </label>

        <div className={styles.actions}>
          <Button type="button" onClick={onClose}>
            Отмена
          </Button>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Загрузка...' : 'Редактировать'}
          </Button>
        </div>

        {error && <p>{error}</p>}
      </form>
    </Modal>
  );
};

export default TaskEditForm;
