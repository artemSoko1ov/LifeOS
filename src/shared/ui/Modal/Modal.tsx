import type { ReactNode, MouseEvent } from 'react';
import styles from './Modal.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: Props) => {
  if (!isOpen) {
    return null;
  }

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={handleContentClick}>
        <header className={styles.header}>
          <h2>{title}</h2>

          <button
            className={styles.close}
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
          >
            ×
          </button>
        </header>

        {children}
      </div>
    </div>
  );
};

export default Modal;
