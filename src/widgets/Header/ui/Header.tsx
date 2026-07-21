import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logotype}>LifeOS</div>
    </header>
  );
};

export default Header;