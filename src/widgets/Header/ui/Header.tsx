import { useMatches } from 'react-router-dom';
import Button from '@/shared/ui/Button/Button';
import styles from './Header.module.scss';

type RouteHandle = {
  title?: string;
};

type Props = {
  onAddTask: () => void;
};

const Header = ({ onAddTask }: Props) => {
  const matches = useMatches();

  const currentRoute = matches.at(-1);
  const title = (currentRoute?.handle as RouteHandle)?.title;

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>

      <Button onClick={onAddTask}>Add task</Button>
    </header>
  );
};

export default Header;
