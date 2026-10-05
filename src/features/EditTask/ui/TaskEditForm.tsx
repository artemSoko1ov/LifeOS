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
  const editTask = useTaskStore((state) => state.editTask);
  const isEditing = useTaskStore((state) => state.isEditing);
  const editError = useTaskStore((state) => state.editError);

  const [newTitle, setNewTitle] = useState(title);
  const [newCompleted, setNewCompleted] = useState(completed);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newTitle.trim()) {
      return;
    }

    const task = await editTask(id, newTitle.trim(), newCompleted);

    if (task) {
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Task">
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
            disabled={isEditing}
            autoFocus
          />
        </label>
        <label className={styles.label}>
          Выполнение задачи
          <input
            className={styles.input}
            type="checkbox"
            name="completed"
            checked={newCompleted}
            onChange={(event) => setNewCompleted(event.target.checked)}
            disabled={isEditing}
          />
        </label>

        <div className={styles.actions}>
          <Button type="button" onClick={onClose}>
            Отмена
          </Button>

          <Button type="submit" disabled={isEditing}>
            {isEditing ? 'Загрузка...' : 'Редактировать'}
          </Button>
        </div>

        {editError && <p>{editError}</p>}
      </form>
    </Modal>
  );
};

export default TaskEditForm;
